const botaopag1 = document.getElementById("botaopag1");
        
botaopag1.addEventListener("click", () => {
    const nome = document.getElementById("nome");
    const frequencia = document.getElementById("frequencia");
    localStorage.setItem("nomeLS", nome.value);    
    localStorage.setItem("frequenciaLS", frequencia.value);
}); 

document.getElementById("nome").value = localStorage.getItem("nomeLS");
document.getElementById("frequencia").value = localStorage.getItem("frequenciaLS");

/*

const botaopag3A = document.getElementById("botaopag3A");
const botaopag3P = document.getElementById("botaopag3P");

const sub = document.getElementById("subgeneros");

botaopag3A.addEventListener("click", () =>{
    localStorage.setItem("subgenerosLS", sub.value);
});

botaopag3P.addEventListener("click", () =>{
    localStorage.setItem("subgenerosLS", sub.value);
});

sub.value = localStorage.getItem("subgenerosLS");


const botaopag3A = document.getElementById("botaopag3A");
const botaopag3P = document.getElementById("botaopag3P");

botaopag3A.addEventListener("click", () => {
    const subgeneros = document.getElementById("subgeneros").selectedIndex;    
    localStorage.setItem("subgeneroLS", subgeneros.selectedIndex);
});

botaopag3P.addEventListener("click", () => {
    const subgeneros = document.getElementById("subgeneros").selectedIndex;
    localStorage.setItem("subgeneroLS", subgeneros.value);
});

document.getElementById("subgeneros").selectedIndex = localStorage.getItem("subgeneroLS");

*/