const frm = document.querySelector("form")
const resp = document.querySelector("pre")

//adciona um ouvinte de evento, acionado com o submit
frm.addEventListener("submit", (e) => {
    const numero = Number(frm.inNumero.value)

    if (numero % 2 == 0){
        resp.innerText = `${numero} é par`
    } else {
        resp.innerText = `${numero} é ímpar`
    }

    e.preventDefault()
})