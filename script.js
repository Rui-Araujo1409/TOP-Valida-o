const formulário = document.querySelector("form");
const email = document.querySelector("#email");
const país = document.querySelector("#país");
const cp = document.querySelector("#cp");
const pass = document.querySelector("#pass");
const passConfirm = document.querySelector("#passConfirm");


const errosEmail = document.querySelector("#errosEmail");
const erroPaís = document.querySelector("#erroPaís");
const erroCP = document.querySelector("#erroCP");
const erroPass = document.querySelector("#erroPass");
const erroPassConfirm = document.querySelector("#erroPassConfirm");

email.addEventListener("input", (e) => {
    if(email.validity.valueMissing) {
        errosEmail.textContent = "Tem de inserir um enderenço electrónico."
    } else if(email.validity.typeMismatch) {
        errosEmail.textContent = "O enderenço electrónico inserido não é válido.";
    } else {
        errosEmail.textContent = "";
    }
});

país.addEventListener("input", (e) => {
    país.validity.valueMissing ? erroPaís.textContent = "Tem de inserir um país." : errosEmail.textContent = "";
});

cp.addEventListener("input", (e) => {
    cp.validity.valueMissing ? erroCP.textContent = "Tem de inserir um código postal." : erroCP.textContent = "";
});

pass.addEventListener("input", (e) => {
    if(pass.validity.valueMissing) {
        erroPass.textContent = "Tem de inserir uma palavra-passe.";
    } else if(pass.validity.tooShort) {
        erroPass.textContent = "A palavra-passe tem de ter 8 caracteres no mínimo.";
    } else {
        erroPass.textContent = "";
    }
})


formulário.addEventListener("submit", (e) => {
    if(pass.value !== passConfirm.value) {
        erroPassConfirm.textContent = "As palavras-passe não são iguais.";
        e.preventDefault();
    } else {
        alert("Certo!");
    }
})


console.log(pass);

