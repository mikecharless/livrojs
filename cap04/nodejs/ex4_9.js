const prompt = require("prompt-sync")() //adiciona o pacote prompt-sync que permite a entrada de dados

const numero = Number(prompt("Digite um número que seja uma centena: "))
if (numero < 100 || numero > 999){
    console.log(`O número deve ser uma centena`)
    return
}
const centena = Math.floor(numero/100)
const dezena = Math.floor((numero%100)/10)
const unidade = numero%10

console.log(`O número ${numero} invertido fica ${unidade}${dezena}${centena}`)