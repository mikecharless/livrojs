const prompt = require("prompt-sync")()     //adiciona o pacote prompt-sync para entrada de dados

console.log(`${"-".repeat(10)} Método Slice ${"-".repeat(10)}\n`)

//mesmo declarando um vetor como const, eu posso alterá-lo 
const letras = ['A', 'B', 'C', 'D']
const letras2 = letras.slice(-1)        //obtém o último elemento(-1)
const letras3 = letras.slice(-2)        //obtém os dois últimos elementos
const letras4 = letras.slice(0,-1)      //obtém do início(0) ao final(-1)
console.log(letras)
console.log(letras2)
console.log(letras3)
console.log(letras4)
console.log(letras)
console.log("\nO método slice() não altera o vetor")