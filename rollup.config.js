import run from "@rollup/plugin-run";
import { rollup } from "rollup";
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';

export const roll = rollup;

const dev = process.env.NODE_ENV !== 'production';

export default {
	input: './server.js',
	output: {
		file: 'dist/bundle.min.js',
		format: 'cjs',
	},
	plugins: [
		scss({
			output: "./public/css/main.css",
			failOnError: true,
			runtime: require("sass")
		}),
		babel({
			babelrc: false,
			plugins: ['@babel/plugin-proposal-optional-chaining']
		}),
		dev && run(),
	],
	external: [
		'express',
		'path',
		'cors',
		'winston',
		'morgan',
		'helmet',
		'express-session',
		'dotenv',
		'csurf',
		'body-parser',
		'cookie-parser',
		'compression'
	]
}

/*
if using .env modify run() to ==>
run({
  execArgv: ['-r', 'dotenv/config'],
})
*/