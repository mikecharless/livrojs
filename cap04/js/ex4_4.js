//cria as referências aos elementos HTML
const frm = document.querySelector("form")
const resp = document.querySelector("pre")

//adiciona um evento que é acionado com o submit
frm.addEventListener("submit", (e) => {
    const horaB = Number(frm.inHora.value)

    let horaF = horaB + 5
    if (horaF >= 24){
        horaF = horaF - 24
    }
    
    resp.innerText = `Hora na França: ${horaF.toFixed(2)}`

    e.preventDefault()
})