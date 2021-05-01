const botaopag1 = document.getElementById("botaopag1");
        
botaopag1.addEventListener("click", () => {
    const nome = document.getElementById("nome");
    const frequencia = document.getElementById("frequencia");
    localStorage.setItem("nomeLS", nome.value);    
    localStorage.setItem("frequenciaLS", frequencia.value);
}); 

document.getElementById("nome").value = localStorage.getItem("nomeLS");
document.getElementById("frequencia").value = localStorage.getItem("frequenciaLS");
