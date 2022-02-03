const submit = document.getElementById('submit');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

let usernameField = false;
let emailField = false;
let firstPasswordField = false;
let secondPasswordField = false;

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
        setErrorFor(username, 'Minim 3 caractere || Maxim 12 caractere');
        usernameField = false;
    } else {
        setSuccessFor(username);
        usernameField = true;
    }
    enableSubmit()
}
function checkInputsEmail() {
    const emailValue = email.value.trim();

    if (!emailValue.length) {
        setErrorFor(email, 'Acesta nu este un email');
        emailField = false;
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email invalid');
        emailField = false;
    } else {
        setSuccessFor(email);
        emailField = true;
    }
    enableSubmit()
}
function checkInputsPassword() {
    const passwordValue = password.value.trim();

    if (passwordValue.length < 6) {
        setErrorFor(password, 'Minim 6 caractere');
        firstPasswordField = false;
    } else {
        setSuccessFor(password);
        firstPasswordField = true;
    }
    enableSubmit()
}
function checkInputsPassword2() {
    const password2Value = password2.value.trim();
    const passwordValueConfirm = password.value.trim();

    if (!password2Value.length) {
        setErrorFor(password2, 'Confirma parola');
        secondPasswordField = false;
    } else if (passwordValueConfirm !== password2Value) {
        setErrorFor(password2, 'Parolele nu coincid');
        secondPasswordField = false;
    } else {
        setSuccessFor(password2);
        secondPasswordField = true;
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

function enableSubmit(){
    if (usernameField === true && emailField === true && firstPasswordField === true && secondPasswordField === true){
        submit.style.backgroundColor = "dodgerblue";
    }
}