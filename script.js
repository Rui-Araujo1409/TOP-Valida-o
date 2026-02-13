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
    email.validity.valid ? errosEmail.textContent = "" : mostrarErroEmail();
});

país.addEventListener("input", (e) => {
    país.validity.valid ? erroPaís.textContent = "" : mostrarErroPaís();
});

cp.addEventListener("input", (e) => {
    cp.validity.valid ? erroCP.textContent = "" : mostarErroCP();
});

pass.addEventListener("input", (e) => {
      pass.validity.valid ? erroPass.textContent = "" : mostrarErroPass();
      }
)

formulário.addEventListener("submit", (e) => {
     if(pass.value !== passConfirm.value) {
         erroPassConfirm.textContent = "As palavras-passe não são iguais.";
         e.preventDefault();
     } else if(!email.validity.valid) {
        mostrarErroEmail();
        e.preventDefault();
     } else if(!país.validity.valid) {
        mostrarErroPaís();
        e.preventDefault();
     } else if(!cp.validity.valid) {
        mostarErroCP();
        e.preventDefault();
     } else if(!pass.validity.valid || !passConfirm.validity.valid) {
        mostrarErroPass();
        e.preventDefault();
     }
})

const mostrarErroEmail = () => {
    if (email.validity.valueMissing) {
        errosEmail.textContent = "Tem de inserir um enderenço electrónico."
    } else if(email.validity.typeMismatch) {
        errosEmail.textContent = "O enderenço electrónico inserido não é válido.";
    } 
}

const mostrarErroPaís = () => {
    erroPaís.textContent="Tem de inserir um país.";
}

const mostarErroCP = () => {
    erroCP.textContent = "Tem de inserir um código postal.";
}

const mostrarErroPass = () => {
    if(pass.validity.tooShort) {
        erroPass.textContent = "A palavra-passe tem de ter 8 caracteres pelo menos.";
    } else if(pass.validity.valueMissing) {
        erroPass.textContent = "Tem de inserir uma palavra-passe.";
    }
}


