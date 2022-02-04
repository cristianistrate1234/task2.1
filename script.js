const submit = document.getElementById('submit');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

let submitButton = {
    usernameField : false,
    emailField : false,
    firstPasswordField : false,
    secondPasswordField : false
}

username.addEventListener('input', e => {
    e.preventDefault();
    checkInputsUsername();
});
email.addEventListener('input', e => {
    e.preventDefault();
    checkInputsEmail();
});
password.addEventListener('input', e => {
    e.preventDefault();
    checkInputsPassword();
});
password2.addEventListener('input', e => {
    e.preventDefault();
    checkInputsPassword2();
});

function checkInputsUsername() {
    const usernameValue = username.value.trim();

    if(usernameValue.length < 3) {
        setErrorFor(username, 'Minim 3 caractere , maxim 12 caractere ');
        submitButton.usernameField = false;

    } else if (usernameValue.length >= 12){
        setErrorFor(username , 'Maxim 12 caractere')
        submitButton.usernameField = false;

    } else {
        setSuccessFor(username);
        submitButton.usernameField = true;
    }
    enableSubmit()
}
function checkInputsEmail() {
    const emailValue = email.value.trim();

    if (!emailValue.length) {
        setErrorFor(email, 'Acesta nu este un email');
        submitButton.emailField = false;
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email invalid');
        submitButton.emailField = false;
    } else {
        setSuccessFor(email);
        submitButton.emailField = true;
    }
    enableSubmit()
}
function checkInputsPassword() {
    const passwordValue = password.value.trim();

    if (!passwordValue.length) {
        setErrorFor(password, 'Introduceti parola');
        submitButton.firstPasswordField = false;
    } else if (!specialPasswordCheck((passwordValue))){
            setErrorFor(password, 'Minim 6 caractere , maxim 12 , caractere speciale!');
            submitButton.firstPasswordField = false;
    } else {
        setSuccessFor(password);
        submitButton.firstPasswordField = true;
    }
    enableSubmit()
}
function checkInputsPassword2() {
    const password2Value = password2.value.trim();
    const passwordValueConfirm = password.value.trim();

    if (!password2Value.length) {
        setErrorFor(password2, 'Confirma parola');
        submitButton.secondPasswordField = false;
    } else if (passwordValueConfirm !== password2Value) {
        setErrorFor(password2, 'Parolele nu coincid');
        submitButton.secondPasswordField = false;
    } else {
        setSuccessFor(password2);
        submitButton.secondPasswordField = true;
    }
    enableSubmit()
}
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function specialPasswordCheck(password){
    return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(password);
}

function enableSubmit(){
    if (submitButton.usernameField === true && submitButton.emailField === true && submitButton.firstPasswordField === true && submitButton.secondPasswordField === true){
        submit.style.backgroundColor = "dodgerblue";
    }
}