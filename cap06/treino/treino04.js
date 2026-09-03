const prompt = require("prompt-sync")() //adiciona o pacote prompt-sync para entrada de dados

console.log(`${"-".repeat(10)} Apresentando um vetor ${"-".repeat(10)}\n`)

console.log("Apresentando um vetor diretamento por console.log(nome_v)")
const cidades = ["Pelotas", "Curitiba", "Porto Alegre"]
console.log(cidades)

console.log("\nMétodo toString()")
console.log(cidades.toString())
console.log("O método toString() converte o vetor em uma string e o apresenta separando seus elementos por ','")

console.log("\nMétodo join()")
console.log(cidades.join(" - "))
console.log("join() também converte o vetor em uma string e o apresenta seprando seus elementos pelo conteúdo descrito no método")

console.log("\ncom o laço de repetição for")
for (let i = 0; i < cidades.length; i++){
    console.log(cidades[i])
}

console.log("")