const prompt = require("prompt-sync")()     //adicona o pacote prompt-sync para entrada de dados

console.log(`${'-'.repeat(10)} for of ${'-'.repeat(10)}\n`)

const cidades = ['Pelotas', 'São Lourenço', 'Porto Alegre']
for (const cidade of cidades){
    console.log(cidade)
}

console.log("\ncidade recebe cada elemento do vetor cidades;")
console.log("Como cidade é uma variável de bloco, deixa de existir a cada iteração;")
console.log("Por isso podemos declará-la como const.\n")