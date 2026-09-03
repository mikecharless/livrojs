const prompt = require("prompt-sync")() //adiciona o pacote prompt para entrada de dados

const numeroPessoas = Number(prompt("N° de pessoas da família: "))
const numerosPeixes = Number(prompt("N° de peixes obtidos: "))

/*let valorPeixe
if (numerosPeixes > numeroPessoas){
    valorPeixe = (numerosPeixes - numeroPessoas) * 12
} else {
    valorPeixe = 0
}*/
let valorPeixe = numerosPeixes > numeroPessoas ? (numerosPeixes - numeroPessoas) * 12 : 0
const valorTotal = (numeroPessoas*20) + valorPeixe

console.log(`Pagar R$: ${valorTotal.toFixed(2)}`)