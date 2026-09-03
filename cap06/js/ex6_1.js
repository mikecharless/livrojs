//criar as referências aos elementos html da página
const frm = document.querySelector("form")
const resp1 = document.querySelector("span")
const resp2 = document.querySelector("#outResp")

const pacientes = []
//criar um ouvinte de evento acionado com o submit
frm.addEventListener("submit", (e) => {
    const paciente = frm.inPaciente.value

    pacientes.push(paciente)
    let lista = ""
    pacientes.forEach((pac, i) => {
        lista += `${i+1}. ${pac}\n`
    })

    resp2.innerText = lista

    frm.reset()
    frm.inPaciente.focus()
    e.preventDefault()
})

frm.btUrgencia.addEventListener("click", () => {
    if (!frm.checkValidity()){
        alert("Informe o nome do paciente a ser atendido com urgência")
        return
    }

    const paciente = frm.inPaciente.value
    pacientes.unshift(paciente)
    let lista = ""
    for (let i = 0; i < pacientes.length; i++){
        lista += `${i+1}. ${pacientes[i]}\n`
    }
    
    resp2.innerText = lista

    frm.reset()
    frm.inPaciente.focus()
})

frm.btAtender.addEventListener("click", () => {
    if (pacientes.length == 0){
        alert("Adicione algum paciente para atendimento")
        return
    }

    const atender = pacientes.shift()
    let lista = ""
    pacientes.forEach((pac, i) => {
        lista += `${i+1}. ${pac}\n`
    })

    resp1.innerText = atender
    resp2.innerText = lista

    frm.reset()
    frm.inPaciente.focus()
})