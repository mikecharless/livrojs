//cria as referências aos elementos html
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

//adiciona um ouvinte de evento, acionado com o clique do submit
frm.addEventListener("submit", (e) => {
    const valor = Number(frm.inValor.value)
    
    if (valor < 1){
        alert("Valor insuficiente")
        return
    }
    let troco
    let tempo
    if (valor < 1.75){
        tempo = 30
        troco = valor % 1
    } else if (valor < 3){
        tempo = 60
        troco = valor % 1.75
    } else {
        tempo = 120
        troco = valor % 3
    }

    resp1.innerHTML = `Tempo: ${tempo} min`
    resp2.innerHTML = `Troco R$: ${troco.toFixed(2)}`

    e.preventDefault()
})