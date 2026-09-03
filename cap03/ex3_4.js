const prompt = require("prompt-sync")()     //adiciona o pacotr que permite a entrada de dados
const pesoRacao = Number(prompt("Peso da ração (kg): "))
const consumoDiario = Number(prompt("Consumo diário (gr): "))

const duracao = Math.floor((pesoRacao*1000)/consumoDiario)
const sobra = (pesoRacao*1000)%consumoDiario

console.log(`Duração: ${duracao} dia(s)`)
console.log(`Sobra: ${sobra}gr`)
