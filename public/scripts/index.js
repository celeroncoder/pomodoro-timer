({
	pomodro: document.querySelector(".pomodoro"),
	shortBreak: document.querySelector(".sBreak"),
	longBreak: document.querySelector(".lBreak")
});

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
	click: new Audio('/audio/switch.mp3')
};

const timerData = {
	minutes: 30,
	seconds: 0
};

window.addEventListener('DOMContentLoaded', () => {
	timer.minutes.textContent = timerData.minutes;
	timer.seconds.textContent = '00';
});

timer.controlBtn.addEventListener('click', () => {
	timerUIChange();
});

function timerUIChange() {
	timer.controlBtn.classList.toggle('stop');
	audio.click.play();
	if (timer.controlBtn.classList.contains('stop')) {
		timer.fowardBtn.style.display = 'block';
	} else {
		timer.fowardBtn.style.display = 'none';
	}
}
