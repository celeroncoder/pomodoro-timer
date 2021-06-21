import express from 'express';
import cors from 'cors';
import httpLogger from "./middlewares/httpLogger";
import logger from "./utils/logger";
// * must include this import else the compiler won't work!
import "./src/scss/main.scss";
import helmet from 'helmet';
import session from 'express-session';
import dotenv from 'dotenv';
import csurf from 'csurf';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.disable('x-powered-by');
app.set('trust proxy', 1);
app.use(session({
	secret: process.env.SESSION_SECRET,
	name: 'sessionID',
	cookie: {
		secure: true,
		httpOnly: true
	},
	resave: false,
	saveUninitialized: true
}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(csurf({ cookie: true }));

app.use(compression());

app.use(express.static("public"));

app.use(httpLogger);
app.set('view engine', 'ejs');
app.set('views', 'src/views')


app.get('/', (req, res) => {
	res.render('index');
})

app.listen(PORT, () => logger.info(`Server started at http://localhost:${PORT}`));
