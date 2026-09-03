//criando as referências aos elementos html 
const frm = document.querySelector("form")
const resp = document.querySelector("pre")

//adicionar um ouvinte de evento, disparado quando o submit for clicado
frm.addEventListener("submit", (e) => {
    const numero = Number(frm.inNumero.value)

    let tabuada = ""
    for (let i = 1;i <= 10; i++){
        tabuada += `${numero} x ${i} = ${numero*i}\n`
    }

    resp.innerText = tabuada

    e.preventDefault()
})