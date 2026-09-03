//criar as referências aos elementos html
const frm = document.querySelector("form")
const resp = document.querySelector("#outResp")

//adicionar um ouvinde de evento que será acionado com o submit
frm.addEventListener("submit", (e) => {
    const buffetQuilo = Number(frm.inValor.value)
    const consumo = Number(frm.inConsumo.value)

    const valorTotal = buffetQuilo * (consumo/1000)

    resp.innerText = `Valor a pagar R$ :${valorTotal.toFixed(2)}`

    //para evitar o envio do form
    e.preventDefault()
})