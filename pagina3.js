const botaopag3A = document.getElementById("botaopag3A");
const botaopag3P = document.getElementById("botaopag3P");

const sub = document.getElementById("subgeneros");

botaopag3A.addEventListener("click", () =>{
    localStorage.setItem("subgenerosLS", sub.value);
});

botaopag3P.addEventListener("click", () =>{
    localStorage.setItem("subgenerosLS", sub.value);
});

subgeneros.value = localStorage.getItem("subgenerosLS");