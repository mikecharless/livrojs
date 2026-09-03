//cria as referência aos elementos html
const frm = document.querySelector("form")
const resp = document.querySelector("pre")

//adicion um ouvintede evento que é acionado com o submit
frm.addEventListener("submit", (e) => {
    const numero = Number(frm.inNumero.value)

    const raiz = Math.sqrt(numero)

    if (Number.isInteger(raiz)){
        resp.innerText = `Raiz: ${raiz}`
    } else {
        resp.innerText = `Não há raiz exata para ${numero}`
    }

    e.preventDefault()
})