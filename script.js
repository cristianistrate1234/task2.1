const submit = document.getElementById('submit');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
submit.disabled = true;

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



submit.addEventListener('change' , () =>{
    checkInputs()
})
function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue.length >= 3 && passwordValue === password2Value && passwordValue.length >= 6 && isEmail(emailValue)) {
        submit.disabled = false;
    } else {
        submit.disabled = true;
    }
}
function checkInputsUsername() {
    const usernameValue = username.value.trim();

    if(usernameValue.length < 3 ) {
        setErrorFor(username, 'Minim 3 caractere');
    } else {
        setSuccessFor(username);
    }
}
function checkInputsEmail() {
    const emailValue = email.value.trim();

    if (emailValue === '') {
        setErrorFor(email, 'Acesta nu este un email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email invalid');
    } else {
        setSuccessFor(email);
    }
}
function checkInputsPassword() {
    const passwordValue = password.value.trim();

    if (passwordValue.length < 6) {
        setErrorFor(password, 'Minim 6 caractere');
    } else {
        setSuccessFor(password);
    }
}
function checkInputsPassword2() {
    const password2Value = password2.value.trim();
    const passwordValueConfirm = password.value.trim();

    if (password2Value === '') {
        setErrorFor(password2, 'Confirma parola');
    } else if (passwordValueConfirm !== password2Value) {
        setErrorFor(password2, 'Parolele nu coincid');
    } else {
        setSuccessFor(password2);
    }
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
