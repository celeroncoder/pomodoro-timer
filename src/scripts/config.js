export const timerOptions = {
	pomodro: document.querySelector(".pomodoro"),
	shortBreak: document.querySelector(".sBreak"),
	longBreak: document.querySelector(".lBreak")
}

export const timer = {
	minutes: document.querySelector('#minutes'),
	seconds: document.querySelector('#seconds'),
	controlBtn: document.querySelector('.controlBtn'),
	fowardBtn: document.querySelector('.control-forward')
}

export const headerOptions = {
	report: document.querySelector('.report'),
	settings: document.querySelector('.settings'),
	avatar: document.querySelector('.avatar')
}

export const audio = {
	click: new Audio('/audio/switch.mp3'),
	bell: new Audio('/audio/bell.mp3')
}