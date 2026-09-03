//criar as referências aos elementos html da página
const frm = document.querySelector("form")
const respErros = document.querySelector("#outResp1")
const respChances = document.querySelector("#outResp2")
const respDica = document.querySelector("#outResp3")

const numeroCerto = Math.floor(Math.random()*100) + 1
const erros = []

frm.addEventListener("submit", (e) => {
    const numero = Number(frm.inNumero.value)

    if (numero == numeroCerto){
        respDica.innerText = `Você apostou ${numero} e acertou!`
        frm.btNovo.class = "exibe"
    }

    if (erros.includes(numero)){
        alert("Você já apostou esse número")
        return
    }

    erros.push(numero)
    let lista = ""
    erros.forEach(erro => {lista += `${erro}, `})

    respErros.innerHTML = `${erros.length} [${lista}]`
    respChances.innerHTML = `${6 - erros.length}`

    e.preventDefault()
})