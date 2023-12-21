//login button handler

let loginBtn = document.querySelector('#loginBtn');
loginBtn.addEventListener('click', function () {
	let getEmail = document.querySelector('#email').value;
	let getPass = document.querySelector('#password').value;

	if (getEmail !== 'goursaha307@gmail.com' && getPass !== '12345') {
		document.querySelector('.warning').innerHTML = '*please enter your valid email and password';
	} else if (getEmail !== 'goursaha307@gmail.com') {
		document.querySelector('.warning').innerHTML = '*please enter your valid email';
	} else if (getPass !== '12345') {
		document.querySelector('.warning').innerHTML = '*Invalid password*';
	} else {
		const loginArea = document.querySelector('.login-area');
		loginArea.style.display = 'none';
		const transictionArea = document.querySelector('.transiction-area');
		transictionArea.style.display = 'block';
	}
});

// input handler function
function getinputAmount(id) {
	const getAmount = document.querySelector(id).value;
	const amountNumber = parseFloat(getAmount);
	return amountNumber;
}

// main activity function
function updateBalance(id, depositNumber) {
	const currentAmount = document.querySelector(id).innerText;
	const currentAmountNumber = parseFloat(currentAmount);
	const totalAmount = depositNumber + currentAmountNumber;
	document.querySelector(id).innerText = totalAmount;
}

//deposit button handler
let depositBtn = document.querySelector('#depositBtn');
depositBtn.addEventListener('click', function () {
	const depositNumber = getinputAmount('#depositAmount');

	updateBalance('#currentDeposit', depositNumber);
	updateBalance('#currentBalance', depositNumber);

	let depositMsg = document.getElementById('depositMsgPlace');
	depositMsg.innerHTML = `<span class="text text-success"> You have successfully diposited $${depositNumber} </span>`;
	document.querySelector('#depositAmount').value = '';
});

//withdraw button handler
let withdrawBtn = document.querySelector('#withdrawBtn');
withdrawBtn.addEventListener('click', function () {
	const withdrawNumber = getinputAmount('#withdrawAmount');

	updateBalance('#currentWithdraw', withdrawNumber);
	updateBalance('#currentBalance', -1 * withdrawNumber);

	let withdrawtMsg = document.getElementById('withdrawMsgPlace');
	withdrawtMsg.innerHTML = `<span class="text text-success"> You have successfully withdrawed $${withdrawNumber} </span>`;
	// ('You have successfully withdraw $' + withdrawNumber);
	document.querySelector('#withdrawAmount').value = '';
});

// const currentBalance = document.querySelector('#currentBalance').innerText;
// const currentBalanceNumber = parseFloat(currentBalance);
// const totalBalance = depositNumber + currentBalanceNumber;
// document.querySelector('#currentBalance').innerText = totalBalance;

// //////////////////////////////////////////////////////////////////////////////
// const currentDeposit = document.querySelector('#currentDeposit').innerText;
// const currentDepositNumber = parseFloat(currentDeposit);
// const totalDeposit = depositNumber + currentDepositNumber;
// document.querySelector('#currentDeposit').innerText = totalDeposit;

// //////////////////////////////////////////////////////////////////////////////
// const depositAmount = document.querySelector('#depositAmount').value;
// const depositNumber = parseFloat(depositAmount);

// const withdrawAmount = document.querySelector('#withdrawAmount').value;
// const withdrawNumber = parseFloat(withdrawAmount);
