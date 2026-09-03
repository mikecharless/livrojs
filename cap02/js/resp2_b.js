//criar as referência aos elementos HTML
const frm = document.querySelector("form")
const resp = document.querySelector("pre")

//criar um ouvindo de evento que será acionado com um clique no submit
frm.addEventListener("submit", (e) => {
    const valor = Number(frm.inValor.value)
    const tempo = Number(frm.inTempo.value)

    const numFracoes = Math.ceil(tempo/15)
    const conta = valor*numFracoes

    resp.innerText = `Valor a pagar R$ ${conta.toFixed(2)}`
    e.preventDefault()
})