const textField = document.getElementById('text-field');
function setStyle(id, style) {
	document.getElementById(id).addEventListener('click', function () {
		textField.classList.toggle(style);
	});
}

// function setStyleByInput(id, style) {
// 	const inputValue = document.getElementById('font-size-input');

// }

setStyle('btn-bold', 'fw-bold');
setStyle('btn-italic', 'fst-italic');
setStyle('btn-underline', 'text-decoration-underline');
setStyle('btn-line-through', 'text-decoration-line-through');
setStyle('btn-align-right', 'text-end');
setStyle('btn-align-center', 'text-center');
setStyle('btn-align-justify', 'text-justify');
setStyle('btn-capitalize', 'text-capitalize');
setStyle('btn-uppercase', 'text-uppercase');
setStyle('btn-lowercase', 'text-lowercase');

document.getElementById('font-size-input').addEventListener('input', function () {
	const inputValue = document.getElementById('font-size-input');
	textField.style.fontSize = inputValue.value + 'px';
});

document.getElementById('color-input').addEventListener('input', function () {
	const inputValue = document.getElementById('color-input');
	textField.style.color = inputValue.value;
});
