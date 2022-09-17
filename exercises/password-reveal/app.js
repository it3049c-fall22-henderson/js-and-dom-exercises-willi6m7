// 🤖: create 2 constants with references to the password input and the reveal button from the DOM


// 🤖: Create an Event Listener on the password reveal button
// 🤖: The event listener should toggle the password field attribute between `password` and `text` to change the visibility of the password field content.


// Provided for you - prevent form submit
const form = document.querySelector("form");
const password = document.querySelector("#password");
const toggle = document.querySelector("#togglePassword");
toggle.addEventListener('click', function(){
	const type = password.type;
	if (type === 'text') {
		password.type = 'password';
	} else {
		password.type = 'text';
	}
})
form.addEventListener('submit',function(e){
	e.preventDefault();
});
