//criar as referências aos elementos HTML
const frm = document.querySelector("form")
const resp = document.querySelector("pre")

//adiciona um ouvinte de evento, acionado quando o submit é clicado
frm.addEventListener("submit", (e) => {
    const velocidadePermitida = Number(frm.inVelocidade.value)
    const velocidadeCondutor = Number(frm.inCondutor.value)

    /*if (velocidadeCondutor <= velocidadePermitida) {
        resp.innerText = `Sem multa!`
        resp.style.color = 'blue'
    } else if (velocidadeCondutor <= 1.2*velocidadePermitida){
        resp.innerText = `Multa leve!`
        resp.style.color = 'yellow'
    } else {
        resp.innerText = `Multa grave!`
        resp.style.color = 'red'
    }*/

    resp.innerText = velocidadeCondutor <= velocidadePermitida ? 
    "Sem multa!" : velocidadeCondutor <= 1.2*velocidadePermitida ? "Multa leve!" : "Multa grave!"

    e.preventDefault()
})