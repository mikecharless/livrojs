//criando as referências aos elementos HTML
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

//adicioanr um ouvinte de evento que será acionado com o clique do submit
frm.addEventListener("submit", (e) => {
    const produto = frm.inProduto.value
    const preco = Number(frm.inPreco.value)

    const precoPromocao = preco/2

    resp1.innerText = `${produto} - Promoção: Leve 3 por ${(preco*2.5).toFixed(2)}`
    resp2.innerText = `O 3° produto sai por ${precoPromocao.toFixed(2)}`

    e.preventDefault()
})