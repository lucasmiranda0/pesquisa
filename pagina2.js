const botao = document.querySelectorAll('#sim,#nao');
const divs = document.querySelectorAll('#divsim,#divnao');
const handleClick = (event) => {
    divs[0].classList.remove('active');
    divs[1].classList.remove('active');
    if (event.target.getAttribute('id') === 'sim') {
        divs[0].classList.add('active');
    } else if (event.target.getAttribute('id') === 'nao') {
        divs[1].classList.add('active');
    }
}

botao.forEach((btn) => btn.addEventListener('click', handleClick));



const botaopag2A = document.getElementById("botaopag2A");
const botaopag2P = document.getElementById("botaopag2P");

const sim = document.getElementById("sim");
const nao = document.getElementById("nao");

function simounao(simounao) {
    if (simounao == 'sim') {
        localStorage.setItem("simounaoLS", "sim");
        
    } else if (simounao == 'nao') {
        localStorage.setItem("simounaoLS", "nao");        
    }
}

botaopag2A.addEventListener("click", () =>{
    simounao(simounao); 
    const respostasim = document.getElementById("respostasim");
    localStorage.setItem("respostasimLS", respostasim.value);    
    const respostanao = document.getElementById("respostanao");
    localStorage.setItem("respostanaoLS", respostanao.value);    
});

botaopag2P.addEventListener("click", () =>{
    simounao(simounao);
    const respostasim = document.getElementById("respostasim");
    localStorage.setItem("respostasimLS", respostasim.value);    
    const respostanao = document.getElementById("respostanao");
    localStorage.setItem("respostanaoLS", respostanao.value);    
});

guardar = localStorage.getItem("simounaoLS");
if (guardar == "sim") {
    sim.checked = true;
    divs[0].classList.add('active');
} else if (guardar == "nao") {
    nao.checked = true;
    divs[1].classList.add('active');
} else {
    sim.checked = false;
    nao.checked = false;
}

document.getElementById("respostasim").value = localStorage.getItem("respostasimLS");
document.getElementById("respostanao").value = localStorage.getItem("respostanaoLS");