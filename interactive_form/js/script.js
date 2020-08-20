/*=== When JavaScript is enabled it will not display ===*/
const other = document.querySelector('#other-title');
other.hidden = true;

/*=== select theme section ===*/
const select_theme = document.querySelector('option[value="select theme"]');
select_theme.hidden = true;
const selectElement = document.querySelector('#design');

/*=== color theme section ===*/
const color = document.querySelector('#shirt-colors');
color.hidden = true;
const colorElementOptions = document.querySelectorAll('#color option');

/*=== This listener hides all options and only show selected options ===*/
selectElement.addEventListener('change', (e) => {
	color.hidden = false;

	for(let i = 0; i < colorElementOptions.length; i++) {
		let selected = e.target.value;

		colorElementOptions[i].style.display = 'none';
		if(selected === 'js puns') {
			if(i >= 0 && i < 3) {
				colorElementOptions[0].selected = true;
				colorElementOptions[i].style.display = '';
			}
		} else if(selected === 'heart js') {
			if(i >= 3 && i < colorElementOptions.length) {
				colorElementOptions[3].selected = true;
				colorElementOptions[i].style.display = '';
			}
		}
	}
});

/*=== activities section ===*/
const activities = document.querySelector('.activities');
const checkboxes = document.querySelectorAll('.activities input');

const p = document.createElement('p');
activities.appendChild(p);

let totalCost = 0;

/*=== calculates total cost and also disable other checkboxes if same day, date and time ===*/
activities.addEventListener('change', (e) => {
	let clicked = e.target;
	let clickedType = clicked.getAttribute('data-day-and-time');
	let dataCost = clicked.getAttribute('data-cost');
	dataCost = Number(dataCost);

	if(clicked.checked) {
		totalCost += dataCost;
	} else {
		totalCost -= dataCost;
	}
	p.textContent = `Total Cost: ${totalCost}`;

	for(let i = 0; i < checkboxes.length; i++) {
		let checkboxesType = checkboxes[i].getAttribute('data-day-and-time');

		if(clickedType === checkboxesType && clicked !== checkboxes[i]) {
			if(clicked.checked) {
				checkboxes[i].disabled = true;
			} else {
				checkboxes[i].disabled = false;
			}
		}
	}
});

/*=== payment info ===*/
const selectMethod = document.querySelector('#payment option[value="select method"]');
selectMethod.hidden = true;
const paymentMode = document.querySelector('#payment');

const credit_card = document.querySelector('#credit-card');
credit_card.hidden = true;
const paypal = document.querySelector('#paypal');
paypal.hidden = true;
const bitcoin = document.querySelector('#bitcoin');
bitcoin.hidden = true;


paymentMode.addEventListener('change', (e) => {
	let selected = e.target.value;
	
	if(selected === 'credit card') {
		credit_card.hidden = false;
		paypal.hidden = true;
		bitcoin.hidden = true;
	} else if(selected === 'paypal') {
		credit_card.hidden = true;
		paypal.hidden = false;
		bitcoin.hidden = true;
	} else if(selected === 'bitcoin') {
		credit_card.hidden = true;
		paypal.hidden = true;
		bitcoin.hidden = false;
	}
});

/*=== Validation ===*/
const form = document.querySelector('form');
const name = document.querySelector('#name');
const email = document.querySelector('#mail');

const nameValidator = () => {
	const nameValue = name.value;

	if(nameValue.length > 0) {
		name.style.borderColor = 'white';
		return true;
	} else {
		name.style.borderColor = 'red';
		return false;
	}

};

const emailValidator = () => {
	const emailValue = email.value;
	const ind = emailValue.indexOf('@');
	const lastInd = emailValue.lastIndexOf('.');

	if(ind > 1 && lastInd > ind+1) {
		email.style.borderColor = 'white';
		return true;
	} else {
		email.style.borderColor = 'red';
		return false;
	}

};

const activitiesValidator = () => {
	for(let i = 0; i < checkboxes.length; i++) {
		if(checkboxes[i].checked) {
			activities.style.border = '0px solid';
			return true;
		}
	}

	activities.style.border = '3px solid red';
	return false;
}

const credit = document.querySelector('#cc-num');
const zip = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');

const  creditcardValidator = () => {
	

	if(credit_card.hidden !== true) {
		let creditValue = credit.value;
		if(creditValue.length > 13 && creditValue.length < 16) {
			credit.style.borderColor = 'white';
			return true;
		} else {
			credit.style.borderColor = 'red';
			return false;
		}
	} else {
		return true;
	}

};

const  zipValidator = () => {
	

	if(credit_card.hidden !== true) {
		let zipValue = zip.value;
		if(zipValue.length === 5) {
			zip.style.borderColor = 'white';
			return true;
		} else {
			zip.style.borderColor = 'red';
			return false;
		}
	} else {
		return true;
	}

};

const  cvvValidator = () => {
	

	if(credit_card.hidden !== true) {
		let cvvValue = cvv.value;
		if(cvvValue.length === 3) {
			cvv.style.borderColor = 'white';
			return true;
		} else {
			cvv.style.borderColor = 'red';
			return false;
		}
	} else {
		return true;
	}

};


form.addEventListener('submit', (e) => {
	nameValidator();
	emailValidator();
	creditcardValidator();
	zipValidator();
	cvvValidator();
	activitiesValidator();

	if(!nameValidator()) {
		e.preventDefault();
	}

	if(!emailValidator()) {
		e.preventDefault();
	}

	if(!creditcardValidator()) {
		e.preventDefault();
	}

	if(!zipValidator()) {
		e.preventDefault();
	}

	if(!cvvValidator()) {
		e.preventDefault();
	}

	if(!activitiesValidator()) {
		e.preventDefault();
	}
});



