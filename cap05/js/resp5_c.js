const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    const numero = Number(frm.inNumero.value)

    let divisores = 0
    let lista = ""
    for (let i = 1; i<=  numero/2; i++){
        if (numero % i == 0){
            lista += `${i}, `
            divisores += i
        }
    }
    if (divisores != numero){
        resp2.innerHTML = `${numero} não é um número perfeito`
    } else {
        resp1.innerHTML = `Divisores: ${lista} (Soma: ${divisores})\n`
        resp2.innerHTML = `${numero} é um número perfeito`
    }

    e.preventDefault()
})