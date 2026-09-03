//criar as referências aos elementos html
const frm = document.querySelector("form")
const resp = document.querySelector("pre")

//adiciona um ouvinte de evento, acionado com o submit
frm.addEventListener("submit", (e) => {
    const numero = Number(frm.inNumero.value)

    let simbolo = ""
    for (let i = 1; i <= numero; i++){
        if (i % 2 == 0){
            simbolos += "_"
        } else {
            simbolos += "*"
        }
    }

    resp.innerText = simbolos

    e.preventDefault()
})