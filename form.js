// JavaScript Document
// Jessica Ricker
// Project 2
var fName = document.getElementById('fName');
var lName = document.getElementById('lName');
var address = document.getElementById('address');
var city = document.getElementById('city');
var zip = document.getElementById('zipCode');
var area = document.getElementById('areaCode');
var phone = document.getElementById('phone');
var email = document.getElementById('email');
var confEmail = document.getElementById('confEmail');
var comments = document.getElementById('comments');
var form = document.getElementById('form');


form.addEventListener('submit', function(e) {
	e.preventDefault();
	
	validateInputs();
});
	
function setError(element, message) {
	var inputControl = element.parentElement;
	var errorDisplay = inputControl.querySelector('.error');
	
	errorDisplay.innerText = message;
	inputControl.classList.add('error');
	inputControl.classList.remove('success');
}

function setSuccess(element) {
	var inputControl = element.parentElement;
	var errorDisplay = inputControl.querySelector('.error');
	
	errorDisplay.innerText = '';
	inputControl.classList.add('success');
	inputControl.classList.remove('error');
}

function validateInputs() {
	var letters = /^[A-Za-z]+$/;
	var alphaNum = /^[A-Za-z0-9]+$/;
	var em = /[^@]+@[^@]+/;
	var digit = /^\d+$/;
	
	if (document.fName.value.match(letters)) {
		setSuccess(fName);	
	} else { 
		setError(fName, 'First Name is not valid.');
	}
	
	if (document.lName.value.match(letters)) {
		setSuccess(lName);
	} else {
		setError(fName, 'Last Name is not valid.');
	}
	
	if (document.address.value.match(alphaNum)) {
		setSuccess(address);	
	} else {
		setError(address, 'Address is not valid.');
	}
	
	if (document.city.value.match(letters)) {
		setSuccess(city);	
	} else {
		setError(city, 'City is not valid.');
	}
	
	if (document.zip.value.match(digit)) {
		setSuccess(zip);	
	} else {
		setError(zip, 'Zip Code is not valid.');
	}
	
	if (document.area.value.match(digit) && area.length == 3) {
		setSuccess(area);	
	} else {
		setError(area, 'Area Code is not valid.');
	}
	
	if (document.phone.value.match(digit) && phone.length == 7) {
		setSuccess(phone);	
	} else {
		setError(phone, 'Phone is not valid.');
	}
	
	if (document.email.value.match(em)) {
		setSuccess(email);	
	} else {
		setError(email, 'Email is not valid.');
	}
	
	if (document.confEmail.value.match(em)) {
		setSuccess(confEmail);	
	} else {
		setError(confEmail, 'Confirmation Email is not valid.');
	}
	
	if (document.comments < 250) {
		setSuccess(comments);	
	} else {
		setError(comments, 'Comments must be under 250 characters.');
	}
	
	if (document.getElementById('email') != (document.getElementById('confEmail'))) {
			setError(email, confEmail, 'Emails do not match.');
		} 
}
/*	
	if (messages.length > 0) {
		e.preventDefault();
		errorElement.innerText = messages.join(', ');
	}
	*/

		