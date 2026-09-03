//criar as referências aos elementos HTML
const frm = document.querySelector("form")
const resp = document.querySelector("#resp")

//adiciona um ouvinte de evento, acionado com o submit
frm.addEventListener("submit", (e) => {
    const fruta = frm.inFruta.value
    const num = Number(frm.inNumero.value)

    let resposta = ""
    for (let i = 1; i < num; i++){
        resposta += `${fruta} * `
    }
    resposta += `${fruta}`

    resp.innerText = resposta
    
    e.preventDefault()
})