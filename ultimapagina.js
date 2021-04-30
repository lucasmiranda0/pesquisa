nome4.innerText = "Nome: " + localStorage.getItem("nomeLS");

frequencia4.innerText = "Com qual frequência você escuta música? " + localStorage.getItem("frequenciaLS");

if (localStorage.getItem("simounaoLS") == "sim") {
    escuta4.innerText = "Você escuta rock e/ou metal? Sim";
    pergunta4.innerText = "Quais outros estilos musicais você escuta? " + localStorage.getItem("respostasimLS");
} else if (localStorage.getItem("simounaoLS") == "nao") {
    escuta4.innerText = "Você escuta rock e/ou metal? Não";
    pergunta4.innerText = "Como foi sua introdução ao Heavy Metal? " + localStorage.getItem("respostanaoLS");
} else {
    pergunta4.innerText = "";
}

if (localStorage.getItem("subgenerosLS") == "groove") {
    bandas4.innerText = "Qual desses subgêneros de Heavy Metal você mais gosta? Groove Metal";
} else if (localStorage.getItem("subgenerosLS") == "newwave") {
    bandas4.innerText = "Qual desses subgêneros de Heavy Metal você mais gosta? New Wave";
} else if (localStorage.getItem("subgenerosLS") == "nu") {
    bandas4.innerText = "Qual desses subgêneros de Heavy Metal você mais gosta? Nu Metal";
} else if (localStorage.getItem("subgenerosLS") == "thrash") {     
    bandas4.innerText = "Qual desses subgêneros de Heavy Metal você mais gosta? Thrash Metal";
} else {
    bandas4.innerText = "";
}    

const pag4button = document.getElementById("pag4button");

pag4button.addEventListener("click", () => {
    localStorage.clear();
    const botsim = document.getElementById('divsim');
    const botnao = document.getElementById('divnao');
    botsim.checked = false;
    botnao.checked = false;

});