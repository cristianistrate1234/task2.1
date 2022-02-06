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
        setErrorFor(username, 'Minim 3 caractere');
        // submitButton.usernameField = false;

    } else if (usernameValue.length >= 12){
        setErrorFor(username , 'Maxim 12 caractere')
        // submitButton.usernameField = false;

    } else {
        setSuccessFor(username);
        // submitButton.usernameField = true;
    }
    // enableSubmit()
}
function checkInputsEmail() {
    const emailValue = email.value.trim();

    if (!emailValue.length) {
        setErrorFor(email, 'Acesta nu este un email');
        // submitButton.emailField = false;
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email invalid');
        // submitButton.emailField = false;
    } else {
        setSuccessFor(email);
        // submitButton.emailField = true;
    }
    // enableSubmit()
}

function checkInputsPassword() {
    const passwordValue = password.value.trim();
    if (passwordValue.length < 6) {
        setErrorFor(password,"Minim 6 Caractere");
        // submitButton.firstPasswordField = false;
    } else if (passwordValue.search(/[A-Z]/i) < 0) {
        setErrorFor(password , "Parola trebuie sa contina o litera mare");
        // submitButton.firstPasswordField = false;
    } else if (passwordValue.search(/[0-9]/) < 0) {
        setErrorFor(password , "Parola trbuie sa contina o cifra");
        // submitButton.firstPasswordField = false;
    } else if (passwordValue.search(/[!@#$%^&*]/) < 0) {
        setErrorFor(password , "Parola trebuie sa contina un caracetr special");
        // submitButton.firstPasswordField = false;
    }else {
        setSuccessFor(password);
        // submitButton.secondPasswordField = true;
    }
    // enableSubmit()
}


function checkInputsPassword2() {
    const password2Value = password2.value.trim();
    const passwordValueConfirm = password.value.trim();

    if (!password2Value.length) {
        setErrorFor(password2, 'Confirma parola');
        // submitButton.secondPasswordField = false;
    } else if (passwordValueConfirm !== password2Value) {
        setErrorFor(password2, 'Parolele nu coincid');
        // submitButton.secondPasswordField = false;
    } else {
        setSuccessFor(password2);
        // submitButton.secondPasswordField = true;
    }
    // enableSubmit()
}
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
   Object.values(submitButton).every((v) =>{
       if (v === false){
           submit.style.backgroundColor = "silver";
       }
   })

}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    Object.values(submitButton).every((v) =>{
        if (v === true){
            submit.style.backgroundColor = "dodgerblue";
        }
    })

}
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

// function enableSubmit() {
//     for (let i = 0; i < submitButton.length; i++) {
//        if (submitButton.length[i] === true){
//            submit.style.backgroundColor = "dodgerblue";
//        }
//    }
//
// }