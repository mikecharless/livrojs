//referência aos elementos HTML das páginas
const frm = document.querySelector("form")
const resp = document.querySelector("pre")

//adiciono um ouvindo do evento submit
frm.addEventListener("submit", (e) =>{
    const nome = frm.inNome.value
    resp.innerText = `Olá ${nome}`

    //o preventDefault evita o envio do form, e a consequente perda das informações nos campos do form e respostas da página
    e.preventDefault()
})