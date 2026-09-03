//criar aas referências aos elementos html
const frm = document.querySelector("form")
const resp = document.querySelector("pre")

//adiciona um ouvinte de evento, acionado com o submit
frm.addEventListener("submit", (e) => {
    const num = Number(frm.inNumero.value)
    const anos = Number(frm.inAnos.value)

    let lista = ""
    let numChinchilas = num
    for (let i = 1; i <= anos; i++){
        lista += `${i}° ano: ${numChinchilas} chinchilas\n`
        numChinchilas = numChinchilas * 3
    }

    resp.innerHTML = lista

    e.preventDefault()
})
