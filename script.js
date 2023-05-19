document.getElementById("signupForm").addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    clearErrorMessages();

    
    var fullNameValid = validateFullName();
    var emailValid = validateEmail();
    var passwordValid = validatePassword();
    var repeatPasswordValid = validateRepeatPassword();
    var agreeTermsValid = validateAgreeTerms();

    
    if (fullNameValid && emailValid && passwordValid && repeatPasswordValid && agreeTermsValid) {
       
        document.getElementById("signupForm").reset();

        
        alert("Sign up done!");
    }
}

function validateFullName() {
    var fullNameInput = document.getElementById("fullName");
    var fullNameError = document.getElementById("fullNameError");
    var fullName = fullNameInput.value.trim();

    if (fullName.length < 6) {
        fullNameError.textContent = "Full name must be at least 6 characters";
        fullNameInput.classList.add("is-invalid");
        return false;
    }

    return true;
}

function validateEmail() {
    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("emailError");
    var email = emailInput.value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Email address is required";
        emailInput.classList.add("is-invalid");
        return false;
    }

    if (!emailRegex.test(email)) {
        emailError.textContent = "Email address is not valid";
        emailInput.classList.add("is-invalid");
        return false;
    }

    return true;
}

function validatePassword() {
    var passwordInput = document.getElementById("password");
    var passwordError = document.getElementById("passwordError");
    var password = passwordInput.value.trim();

    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters";
        passwordInput.classList.add("is-invalid");
        return false;
    }

    return true;
}

function validateRepeatPassword() {
    var repeatPasswordInput = document.getElementById("repeatPassword");
    var repeatPasswordError = document.getElementById("repeatPasswordError");
    var repeatPassword = repeatPasswordInput.value.trim();
    var passwordInput = document.getElementById("password");
    var password = passwordInput.value.trim();

    if (repeatPassword !== password) {
        repeatPasswordError.textContent = "Passwords do not match";
        repeatPasswordInput.classList.add("is-invalid");
        return false;
    }

    return true;
}

function validateAgreeTerms() {
    var agreeTermsInput = document.getElementById("agreeTerms");
    var agreeTermsError = document.getElementById("agreeTermsError");

    if (!agreeTermsInput.checked) {
        agreeTermsError.textContent = "You must agree to the terms and conditions";
        return false;
    }

    return true;
}

function clearErrorMessages() {
    var errorMessages = document.getElementsByClassName("invalid-feedback");

    for (var i = 0; i < errorMessages.length; i++) {
        errorMessages[i].textContent = "";
    }

    var formInputs = document.getElementsByClassName("form-control");

    for (var i = 0; i < formInputs.length; i++) {
        formInputs[i].classList.remove("is-invalid");
    }
}
