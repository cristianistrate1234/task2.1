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

    if (!usernameValue.length){
        setErrorFor(username , "Scrieti un username" , "usernameField");
    } else if(usernameValue.length < 3) {
        setErrorFor(username, 'Minim 3 caractere' , "usernameField");

    } else if (usernameValue.length >= 12){
        setErrorFor(username , 'Maxim 12 caractere' , "usernameField")

    } else {
        setSuccessFor(username , "usernameField");
    }
    enableSubmit()
}
function checkInputsEmail() {
    const emailValue = email.value.trim();

    if (!emailValue.length) {
        setErrorFor(email, 'Acesta nu este un email' , "emailField");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email invalid' , "emailField");
    } else {
        setSuccessFor(email , "emailField");
    }
    enableSubmit()
}

function checkInputsPassword() {
    const passwordValue = password.value.trim();
    if (passwordValue.length < 6) {
        setErrorFor(password,"Minim 6 Caractere" , "firstPasswordField");
    } else if (passwordValue.search(/[A-Z]/i) < 0) {
        setErrorFor(password , "Parola trebuie sa contina o litera mare" , "firstPasswordField");
    } else if (passwordValue.search(/[0-9]/) < 0) {
        setErrorFor(password , "Parola trbuie sa contina o cifra" , "firstPasswordField");
    } else if (passwordValue.search(/[!@#$%^&*]/) < 0) {
        setErrorFor(password , "Parola trebuie sa contina un caracetr special" , "firstPasswordField");
    }else {
        setSuccessFor(password , "firstPasswordField");
    }
    enableSubmit()
}


function checkInputsPassword2() {
    const password2Value = password2.value.trim();
    const passwordValueConfirm = password.value.trim();

    if (!password2Value.length) {
        setErrorFor(password2, 'Confirma parola' , "secondPasswordField");
    } else if (passwordValueConfirm !== password2Value) {
        setErrorFor(password2, 'Parolele nu coincid' , "secondPasswordField");
    } else {
        setSuccessFor(password2 , "secondPasswordField");
    }
    enableSubmit()
}
function setErrorFor(input, message , key) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
    submitButton[key] = false;

}

function setSuccessFor(input , key) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    submitButton[key] = true;
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function enableSubmit() {
    Object.values(submitButton).every((key) =>{
        if (key === true){
           return  submit.style.backgroundColor = "dodgerblue";
        }else {
           return  submit.style.backgroundColor = "silver";
        }
    })
}