// Base
const inputTempo = document.querySelector("#tempoInput")
const button = document.querySelector(".simular")
let pontosAcumulados = 0

// Funcionalidade que mostra o tempo
function mostrarTempo (){

    // pesquisar sobre label
    let labelTempo = document.querySelector("#tempoLabel")
    labelTempo.innerText = `${inputTempo.value} meses`
}

inputTempo.addEventListener("change" , mostrarTempo)


// Funcionalidade que calcula os pontos
function calcularPontos (){

    const inputValor = document.getElementById("valorInput").value  
    const pontosDia = document.getElementById("pontosDiarios")
    const pontosMes = document.getElementById("pontosMensais") 

    const meses = inputTempo.value
    let resultado = inputValor / 40
    

    if (inputValor < 40){
        pontosDia.innerText = 0
    } 
    else if (inputValor >= 40 && meses == 0) {
        pontosDia.innerText = resultado      
    } 
    else {
        pontosDia.innerText = resultado 

        let totalMensal = resultado * (meses * 30)
        pontosAcumulados = pontosAcumulados + totalMensal
        pontosMes.innerText = pontosAcumulados
    }
    
    
    pontosAcumulados = 0 
    
}

button.addEventListener("click" , calcularPontos)

//Funcionalidade mostrar seção QR CODE
const btnQr = document.getElementById("abrirConta")
btnQr.addEventListener('click' , abrirQr)
function abrirQr (){
    const secaoQr = document.querySelector(".secaoQrcode")
    secaoQr.classList.add('mostrar')
}