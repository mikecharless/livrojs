const prompt = require("prompt-sync")()

console.log(`${"-".repeat(10)} Método Splice ${"-".repeat(10)}\n`)
const frutas = ['macã', 'uva', 'laranja', 'pera']
console.log(`vetor: ${frutas} - Tamanho do vetor: ${frutas.length}`)
const retira = frutas.splice(2, 1)
console.log(`vetor: ${frutas} - Tamanho do vetor: ${frutas.length}`)
console.log(`vetor: ${retira} - Tamanho do vetor: ${retira.length}`)

console.log("\nO método splice() altera o vetor original e ele sempre gera um vetor, ainda que apenas com um elemento ou vazio")