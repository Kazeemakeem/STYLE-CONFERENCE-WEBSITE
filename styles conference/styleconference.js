let errormsg1 = document.querySelector('.invalid1');
	errormsg1.style.display = 'none';

let errormsg2 = document.querySelector('.invalid2');
	errormsg2.style.display = 'none';

let form = document.querySelector('.form');
form.addEventListener('submit', event => {

	let fullName = form.element('full-name');
	let emailAddress = form.element('email-address');
	
	console.log(fullName.value, emailAddress.value);

	event.preventDefault();
});