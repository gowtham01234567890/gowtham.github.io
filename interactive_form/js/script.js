// When Page Loads, it adds Focus to the first input element
window.onload = function() {
    document.getElementById("name").focus();
};

// Hides the "other" option, and it displays only when javascript is disabled
const other = document.getElementById("other-title");
other.hidden = true;

// Design
const designSelectElement = document.querySelector('#design');
const selectOptionDesign = document.querySelectorAll('#design option');
selectOptionDesign[0].hidden = true;

// Shirt Color
const selectShirtColor = document.querySelector('#shirt-colors');
selectShirtColor.hidden = true;

// Displays "color" options only when "design" option is selected
designSelectElement.addEventListener('change', event => {
    selectShirtColor.hidden = false;
    const shirtColorOption = document.querySelectorAll('#color option');

    for(let i = 0; i < shirtColorOption.length; i++) {
        let selected = event.target.value;

        shirtColorOption[i].style.display = "none";
        if(selected === 'js puns') {
            if(i >= 0 && i < 3) {
                shirtColorOption[0].selected = true;
                shirtColorOption[i].style.display = '';
            }
        } else if(selected == 'heart js') {
            if(i >= 3 && i < shirtColorOption.length) {
                shirtColorOption[3].selected = true;
                shirtColorOption[i].style.display = '';
            }
        }
    }
});

// Checkboxes
const activities = document.querySelector('.activities');
const checkboxes = document.querySelectorAll('.activities input');

const p = document.createElement('p');
activities.appendChild(p);
let totalCost = 0;
activities.addEventListener('change', event => {

    const clicked = event.target;
    const clickedType = clicked.getAttribute('data-day-and-time');
    let data_cost = clicked.getAttribute('data-cost');
    data_cost = Number(data_cost);

    if(clicked.checked) {
        totalCost += data_cost;
    } else {
        totalCost -= data_cost;
    }

	p.textContent = `Total Cost: ${totalCost}`;

    for(let i = 0; i < checkboxes.length; i++) {
        let checkboxType = checkboxes[i].getAttribute('data-day-and-time');

        if(clickedType === checkboxType && clicked !== checkboxes[i]) {
            if(clicked.checked) {
                checkboxes[i].disabled = true;
            } else {
                checkboxes[i].disabled = false;
            }
        }
    }

}); 

// Payment
const selectPaymentElement = document.querySelector('#payment');
const selectPaymentOption = document.querySelectorAll('#payment option');
selectPaymentOption[0].hidden = true;
selectPaymentOption[1].selected = true;

const creditcard = document.getElementById('credit-card');
creditcard.hidden = false;
const paypal = document.getElementById('paypal');
paypal.hidden = true;
const bitcoin = document.getElementById('bitcoin');
bitcoin.hidden = true;

selectPaymentElement.addEventListener('change', event => {
    const clicked = event.target.value;
    console.log(clicked)
    if(clicked === 'credit card') {
        creditcard.hidden = false;
        paypal.hidden = true;
        bitcoin.hidden = true;
    } else if(clicked === 'paypal') {
        creditcard.hidden = true;
        paypal.hidden = false;
        bitcoin.hidden = true;
    } else if(clicked === 'bitcoin') {
        creditcard.hidden = true;
        paypal.hidden = true;
        bitcoin.hidden = false;
    }
});

// Validators
const form = document.querySelector('form');
const name = document.querySelector('#name');
const email = document.querySelector('#mail');

function nameValidator() {
    const nameValue = name.value;
    if(nameValue.length > 0) {
      name.style.border = '3px solid white';
      return true;
    } else {
      name.style.border = '3px solid red';
      return false;
    }
}

function emailValidator() {
    const emailValue = email.value;
    const ind = emailValue.indexOf('@');
    const lastInd = emailValue.lastIndexOf('.');
    if(ind > 1 && lastInd > ind + 1) {
        email.style.border = '3px solid white';
        return true;
      } else {
        email.style.border = '3px solid red';
        return false;
      }
}

function activitiesValidator() {
    for(let i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
			activities.style.border = '0px solid';
			return true;
		}
    }
    activities.style.border = '3px solid red';
	return false;
}
  

const creditCardNumber = document.getElementById('cc-num');
const zip = document.getElementById('zip');
const cvv = document.getElementById('cvv');

function creditcardValidator() {
    if(creditcard.hidden !== true) {
		let creditValue = creditCardNumber.value;
		if(creditValue.length > 13 && creditValue.length < 16) {
			creditCardNumber.style.borderColor = 'white';
			return true;
		} else {
			creditCardNumber.style.borderColor = 'red';
			return false;
        }
        
	} else {
		return true;
	}
};

function  zipValidator() {
	if(creditcard.hidden !== true) {
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

function  cvvValidator() {
	if(creditcard.hidden !== true) {
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
    if(!nameValidator()) {
        e.preventDefault();
    }

    emailValidator();
    if(!emailValidator()) {
        e.preventDefault();
    }

    activitiesValidator();
    if(!activitiesValidator()) {
        e.preventDefault();
    }

    creditcardValidator();
    if(!creditcardValidator()) {
        e.preventDefault();
    }

    zipValidator();
    if(!zipValidator()) {
        e.preventDefault();
    }

    cvvValidator();
    if(!cvvValidator()) {
        e.preventDefault();
    }
});











