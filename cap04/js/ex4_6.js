//cria as referÊncias aos elementos html
const frm = document.querySelector("form")
const resp100 = document.querySelector("#outNotas100")
const resp50 = document.querySelector("#outNotas50")
const resp10 = document.querySelector("#outNotas10")


frm.addEventListener("submit", (e) => {
    const saque = Number(frm.inSaque.value)
    
    if (saque % 10 != 0){
        alert("O valor do saque deve ser múltiplo de 10")
        return
    }

    let resto
    const notas100 = Math.floor(saque/100)
    resto = saque%100
    const notas50 = Math.floor(resto/50)
    resto = saque%50
    const notas10 = resto/10

    if (notas100) {
        resp100.innerText = `Notas de R$ 100: ${notas100}`
    }
    if (notas50) {
        resp50.innerText = `Notas de R$ 50: ${notas50}`
    }
    if (notas10) {
        resp10.innerText = `Notas de R$ 10: ${notas10}`
    }



    e.preventDefault()
})