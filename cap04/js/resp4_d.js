//criar as referências aos elementos HTML
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

//adiciona um ouvinte de evento, acionado com o submit
frm.addEventListener("submit", (e) => {
    const ladoA = Number(frm.inLadoA.value)
    const ladoB = Number(frm.inLadoB.value)
    const ladoC = Number(frm.inLadoC.value)

    if (ladoA > ladoB + ladoC || ladoB > ladoC + ladoA || ladoC > ladoB + ladoA){
        alert("Os lados não podem formar um triângulo")
        return
    }

    resp1.innerHTML = `Lados podem formar um triângulo`
    let tipo
    if (ladoA == ladoB && ladoA == ladoC){
        tipo = 'Equilátero'
    } else if (ladoA != ladoB && ladoA != ladoC && ladoB!= ladoC){
        tipo = "Escaleno"
    } else {
        tipo = "Isósceles"
    }

    resp2.innerHTML = `Tipo: ${tipo}`
    e.preventDefault()
})