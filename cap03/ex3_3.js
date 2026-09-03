const prompt = require("prompt-sync")()     //adicionar o pacote que permite a entrada de dados
const salario = Number(prompt("Salário do funcionário R$: "))
const anosTrabalho = Number(prompt("Tempo de trabalho (em anos): "))

const quadrienios = Math.floor(anosTrabalho/4)
const salarioFinal = salario*Math.pow(1.01, quadrienios)

console.log(`Quadriênios: ${quadrienios}`)
console.log(`Salário Final R$: ${salarioFinal.toFixed(2)}`)