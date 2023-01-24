const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");

const form = document.querySelector("#signup");

// check first name
const checkFirstName = () => {
	let valid = false;
	const min = 1,
		max = 25;
	const firstname = firstName.value.trim();

	if (!isRequired(firstname)) {
		showError(firstName, "First name cannot be blank.");
	} else if (!isBetween(firstname.length, min, max)) {
		showError(
			firstName,
			`First name must be between ${min} and ${max} characters.`
		);
	} else {
		showSuccess(firstName);
		valid = true;
	}
	return valid;
};

// check last name
const checkLastName = () => {
	let valid = false;
	const min = 1,
		max = 25;
	const lastname = lastName.value.trim();

	if (!isRequired(lastname)) {
		showError(lastName, "Last name cannot be blank.");
	} else if (!isBetween(lastname.length, min, max)) {
		showError(
			lastName,
			`First name must be between ${min} and ${max} characters.`
		);
	} else {
		showSuccess(lastName);
		valid = true;
	}
	return valid;
};

// check email
const checkEmail = () => {
	let valid = false;
	const eMail = email.value.trim();
	if (!isRequired(eMail)) {
		showError(email, "Email cannot be blank.");
	} else if (!isEmailValid(eMail)) {
		showError(email, "Email is not valid.");
	} else {
		showSuccess(email);
		valid = true;
	}
	return valid;
};

// checks if password is valid
const isEmailValid = (email) => {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
};

// returns true if the input arg is empty
const isRequired = (value) => (value === "" ? false : true);

// returns false if length isnt between min and max
const isBetween = (length, min, max) =>
	length < min || length > max ? false : true;

// function to highlight the border of input field for error
const showError = (input, message) => {
	// get the form-field element
	const formField = input.parentElement;
	// add the error class
	formField.classList.remove("success");
	formField.classList.add("error");

	// show the error message
	const error = formField.querySelector("small");
	error.textContent = message;
};

// function to highlight the border of input field for success
const showSuccess = (input) => {
	// get the form-field element
	const formField = input.parentElement;

	// remove the error class
	formField.classList.remove("error");
	formField.classList.add("success");

	// hide the error message
	const error = formField.querySelector("small");
	error.textContent = "";
};

// on submit
form.addEventListener("submit", function (e) {
	//prevent form from submitting
	e.preventDefault();

	//validate forms
	let isFirstNameValid = checkFirstName(),
		isLastNameValid = checkLastName(),
		isEmailValid = checkEmail();

	let isFormValid = isFirstNameValid && isLastNameValid && isEmailValid;

	if (isFormValid) {
	}
});

form.addEventListener("input", function (e) {
	switch (e.target.id) {
		case "firstname":
			checkFirstName();
			break;
		case "surname":
			checkSurname();
			break;
		case "email":
			checkEmail();
			break;
	}
});
