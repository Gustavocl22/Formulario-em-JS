const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordtwo = document.getElementById('passwordtwo');

form.addEventListener('submit', (e) => {

    e.preventDefault()

    checkForm();


})

email.addEventListener("blur", () => {
    checkInputemail();
})

username.addEventListener("blur", () => {
    checkInputUsername();
})

password.addEventListener("blur", () => {
    checkInputPassword();
})
passwordtwo.addEventListener("blur", () => {
    checkInputPasswordtwo();
})



function checkInputUsername() {
    const usernameValue = username.value
    if (usernameValue === '') {
        setErrorFor(username, "O nome de usuario e obrigatorio")
    } else {
        setSuccessFor(username);
    }

}


function checkInputemail() {
    const emailValue = email.value

    if (emailValue === '') {
        setErrorFor(email, "O email e obrigatorio")
    } else {
        setSuccessFor(email);
    }

}

function checkInputPassword() {
    const passwordValue = password.value;

    if (passwordValue === '') {
        setErrorFor(password, "Senha é obrigatória");
    } else if (passwordValue.length < 8) {
        setErrorFor(password, "A senha precisa ter no mínimo 8 caracteres");
    } else {
        setSuccessFor(password);
    }
}


function checkInputPasswordtwo() {
    const passwordValue = password.value;
    const passwordtwoValue = passwordtwo.value;

    if (passwordtwoValue === '') {
        setErrorFor(passwordtwo, "A confirmacao de senha e obrigatoria")
    } else if (passwordtwoValue !== passwordValue) {
        setErrorFor(passwordtwo, "As senha nao sao iguais")
    } else {
        setSuccessFor(passwordtwo)
    }

}

function checkForm() {
    checkInputUsername();
    checkInputemail();
    checkInputPassword();
    checkInputPasswordtwo();

    const formItems = form.querySelectorAll(".form-control.error")

    const isValid = [...formItems].every((item) => {
        return item.className === ".form-control"
    });
    if (isValid) {
        alert("Cadastrado com sucesso")
    } else {
        alert("Preencha todos o campos corretamente")
    }
}



function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");


    small.innerText = message;


    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;


    formControl.className = "form-control success";
}



