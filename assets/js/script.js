// Base
const inputTempo = document.querySelector("#tempoInput")
const button = document.querySelector(".simular")

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
    const pontosMeses = document.getElementById("pontosMensais") 
}