const prompt = require("prompt-sync")() //adiciona o pacote de entrada de dados prompt-sync
const valor = Number(prompt("Valor R$: "))
const numeroParcelas = Number(prompt("N° de parcelas: "))

const centavosP = (valor/numeroParcelas) % 1
const parelasI = Math.floor(valor/numeroParcelas)
const parcelaF = parelasI + (centavosP*numeroParcelas)

for (let i = 1; i < numeroParcelas; i++){
    console.log(`${i}° Parcela: R$ ${parelasI.toFixed(2)}`)
}
console.log(`${numeroParcelas}° Parcela: R$ ${parcelaF.toFixed(2)}`)
