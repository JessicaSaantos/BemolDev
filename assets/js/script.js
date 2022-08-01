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

    if (meses == 0){
        pontosMes.innerText = 0

        if (inputValor < 40 ) {
            pontosDia.innerText = 0
        } else {
            let resultado = inputValor / 40
            pontosDia.innerText = resultado
        }
    } 
    else {
        if (inputValor < 40 ) {
            pontosDia.innerText = 0
            pontosMes.innerText = 0
        } else {
            let resultado = inputValor / 40
            pontosDia.innerText = resultado

            let totalMensal = resultado * 30 
            pontosAcumulados = pontosAcumulados + totalMensal
            pontosMes.innerText = pontosAcumulados
        }
    }
}

button.addEventListener("click" , calcularPontos)