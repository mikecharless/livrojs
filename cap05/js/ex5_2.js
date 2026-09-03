//criar as referências aos elemento HTML
const frm = document.querySelector("form")
const resp = document.querySelector("pre")

//criar um ouvinte de evento, que será acionado com  o submit
frm.addEventListener("submit", (e) => {
    const numero = Number(frm.inNumero.value)

    let numeros = `Entre ${numero} e 1: `
    for (let i = numero; i > 1; i--){
        numeros += `${i}, `
    }
    numeros += `1.`

    resp.innerText = numeros

    e.preventDefault()
})