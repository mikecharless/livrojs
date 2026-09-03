//criar as referências aos elementos html
const frm = document.querySelector("form")
const respFilmes = document.querySelector("#outResp1")
const respTempo = document.querySelector("#outResp2")

//criar um ouvinte para o evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value
    const tempo = Number(frm.inTempo.value)

    const hora = Math.floor(tempo/60)
    const minutos = tempo % 60

    respFilmes.innerHTML = `${nome}`
    respTempo.innerHTML = `${hora} hora(s) e ${minutos} minuto(s)`

    e.preventDefault()
})