import { audio, headerOptions, timer, timerOptions } from "./config";

window.addEventListener('DOMContentLoaded', () => {
	change.minutes();
	timer.seconds.textContent = '00';
})

timer.controlBtn.addEventListener('click', () => {
	timerUIChange();
	start();
})

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
let isPaused = false;

function start() {
	audio.click.play();
	minutesLeft = 24;
	secondsLeft = 59;

	change.minutes();
	change.seconds();

	if (!isPaused) {
		let minutes_interval = setInterval(minutesTimer, 60 * 1000);
		let seconds_interval = setInterval(secondsTimer, 1000);
	}
	function minutesTimer() {
		minutesLeft--;
		change.minutes();
	}

	function secondsTimer() {
		if (secondsLeft <= 0) {
			if (minutesLeft <= 0) {
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
}

const change = {
	minutes: () => timer.minutes.textContent = minutesLeft,
	seconds: () => timer.seconds.textContent = secondsLeft
}

function shortBreak() {
	timerOptions.pomodro.classList.remove('active')
	timerOptions.shortBreak.classList.add('active');
}