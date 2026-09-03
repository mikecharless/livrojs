const prompt = require("prompt-sync")() //adiciona o pacote prompt-sync para entrada de dados

console.log(`${"-".repeat(10)} push(), unshifit(), pop() e shift() ${"-".repeat(10)}\n`)


const cidades = []
console.log(cidades)

cidades.push("Pelotas")             //push() acrescenta no final do vetor
console.log(`Vetor: ${cidades} - Tamanho do vetor: ${cidades.length}`)

cidades.unshift("Curitiba")         //unshift() acrescenta no incio do vetor
console.log(`Vetor: ${cidades} - Tamanho do vetor: ${cidades.length}`)

const ultima = cidades.pop()        //pop() retira o último elemento
console.log(`Vetor: ${cidades} - Tamanho do vetor após retirarmos /${ultima}/: ${cidades.length}`)

const primeira = cidades.shift()    //shift() retira o primeiro elemento
console.log(`Vetor: ${cidades} - Tamanho do vetor após retirarmos /${primeira}/: ${cidades.length}`)