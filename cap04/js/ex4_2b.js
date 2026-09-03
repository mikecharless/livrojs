const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value
    const altura = Number(frm.inAltura.value)
    const masculino = frm.inMasculino.checked 

    /*let peso
    if (masculino) {
        peso = 22 * Math.pow(altura, 2)
    } else {
        peso = 21 * Math.pow(altura, 2)
    }*/
    let peso = (masculino) ? 22*Math.pow(altura,2): 21*Math.pow(altura,2)

    resp.innerText = `${nome}: seu peso ideal é ${peso.toFixed(3)} kgs`

    e.preventDefault()
})

frm.addEventListener("reset" , () => {
    resp.innerText = ""
})
