//criar as referências aos elementos HTML
const frm = document.querySelector("form")
const resp = document.querySelector("pre")

//adicionar um ouvinte de evento, acionado com o clique do submit
frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value
    const masculino = frm.inMasculino.checked 
    const altura = Number(frm.inAltura.value)

    let peso
    if (masculino) {
        peso = 22 * (altura*altura)
        resp.innerText = `${nome}, seu peso ideal é ${peso.toFixed(2)} kg`
    } else {
        peso = 21 * (Math.pow(altura,2))
        resp.innerText = `${nome}, seu peso ideal é ${peso.toFixed(2)} kg`
    }

    e.preventDefault()
})

frm.addEventListener("reset", () => {
    resp.innerText = ""
})