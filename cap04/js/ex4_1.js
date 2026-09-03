//criar as referências aos elementos HTML
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outMedia")
const resp2 = document.querySelector("#outSituacao")

//criar um ouvinte de evento que será acionado com o submit
frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value
    const nota1 = Number(frm.inNota1.value)
    const nota2 = Number(frm.inNota2.value)

    const media = (nota1 + nota2)/2

    resp1.innerText = `Média das Notas ${media.toFixed(1)}.`
    
    if (media >= 7){
        resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a)`
        resp2.style.color = 'blue'
    } else {
        resp2.innerText = `Atenção ${nome}! Você foi reprovado!`
        resp2.style.color = 'red'
    }


    e.preventDefault()
})