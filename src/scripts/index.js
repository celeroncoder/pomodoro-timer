import { audio, headerOptions, timer, timerData, timerOptions } from "./config";

window.addEventListener('DOMContentLoaded', () => {
	timer.minutes.textContent = timerData.minutes;
	timer.seconds.textContent = '00';
})

timer.controlBtn.addEventListener('click', () => {
	timerUIChange();
})

function timerUIChange() {
	timer.controlBtn.classList.toggle('stop');
	audio.click.play();
	if (timer.controlBtn.classList.contains('stop')) {
		timer.fowardBtn.style.display = 'block';
	} else {
		timer.fowardBtn.style.display = 'none';
	}
}
