const timerOptions = {
	pomodro: document.querySelector(".pomodoro"),
	shortBreak: document.querySelector(".sBreak"),
	longBreak: document.querySelector(".lBreak")
};

const timer = {
	minutes: document.querySelector('#minutes'),
	seconds: document.querySelector('#seconds'),
	controlBtn: document.querySelector('.controlBtn'),
	fowardBtn: document.querySelector('.control-forward')
};

({
	report: document.querySelector('.report'),
	settings: document.querySelector('.settings'),
	avatar: document.querySelector('.avatar')
});

const audio = {
	click: new Audio('/audio/switch.mp3'),
	bell: new Audio('/audio/bell.mp3')
};

window.addEventListener('DOMContentLoaded', () => {
	change.minutes();
	timer.seconds.textContent = '00';
});

timer.controlBtn.addEventListener('click', () => {
	timerUIChange();
	start();
});

function timerUIChange() {
	timer.controlBtn.classList.toggle('stop');
	if (timer.controlBtn.classList.contains('stop')) {
		timer.fowardBtn.style.display = 'block';
	} else {
		timer.fowardBtn.style.display = 'none';
	}
}

let minutesLeft = 25;
let secondsLeft = 0;

function start() {
	audio.click.play();
	minutesLeft = 24;
	secondsLeft = 59;

	change.minutes();
	change.seconds();

	let minutes_interval = setInterval(minutesTimer, 60 * 1000);
	let seconds_interval = setInterval(secondsTimer, 1000);

	function minutesTimer() {
		minutesLeft--;
		change.minutes();
	}

	function secondsTimer() {
		if (secondsLeft <= 24) {
			if (minutesLeft <= 24) {
				clearInterval(minutes_interval);
				clearInterval(seconds_interval);
				audio.bell.play();
				shortBreak();
			}
			secondsLeft = 60;
		}
		secondsLeft--;
		change.seconds();
	}

	if (parseInt(timer.seconds.textContent) <= 9) {
		timer.seconds.textContent = `0${timer.seconds.textContent}`;
	}
}

const change = {
	minutes: () => timer.minutes.textContent = minutesLeft,
	seconds: () => timer.seconds.textContent = secondsLeft
};

function shortBreak() {
	timerOptions.pomodro.classList.remove('active');
	timerOptions.shortBreak.classList.add('active');
}
