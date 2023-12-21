let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
	item.addEventListener('click', (e) => {
		screen.style.fontSize = '40px';
		screen.style.textAlign = 'right';
		buttonText = e.target.innerText;
		if (buttonText == 'x') {
			buttonText = '*';
			screenValue += buttonText;
			screen.value = screenValue;
		} else if (buttonText == 'C') {
			screen.style.fontSize = '17px';
			screen.style.textAlign = 'left';
			screenValue = '';
			screen.value = screenValue;
		} else if (buttonText == '=') {
			screen.value = eval(screenValue);
		} else {
			screenValue += buttonText;
			screen.value = screenValue;
		}
	});
}
