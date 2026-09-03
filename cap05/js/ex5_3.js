//criar as referência aos elementos html
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let contas = ""
let numContas = 0
let somaContas = 0


//adiciona um ouvinte de evento, acionado quando o submit é clicado
frm.addEventListener("submit", (e) => {
    const descricao = frm.inDescricao.value
    const valor = Number(frm.inValor.value)

    contas += `${descricao} - R$: ${valor.toFixed(2)}\n`
    numContas++
    somaContas += valor

    resp1.innerHTML = `${contas}${"-".repeat(30)}`
    resp2.innerHTML = `${numContas} conta(s) - Total R$: ${somaContas.toFixed(2)}`

    frm.reset()
    frm.inDescricao.focus()
    e.preventDefault()
})
