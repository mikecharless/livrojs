//cria as referências aos elementos HTML
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

//adicionar um ouvinte de evento, acionado quando o submit for clicado
frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value
    const preco = Number(frm.inPreco.value)

    const valorFinal = Math.floor(preco*2)

    resp1.innerHTML = `Promoção de ${medicamento}`
    resp2.innerHTML = `Leve 2 por apenas R$: ${valorFinal.toFixed(2)}`

    e.preventDefault()
})