const prompt = require("prompt-sync")()

console.log(`${'-'.repeat(10)} forEach ${'-'.repeat(10)}\n`)
cidades = ['Pelotas', 'São Gonçalo', 'Porto Alegre']
cidades.forEach((cidade, i) => {
    console.log(`${i}° Cidade: ${cidade}`)
})

console.log("\nforEach é mais amplo e pode chamar uma função para manipular cada elemento do vetor")
console.log("\nPara operações de soma dos elementos forEach é mais ágil")
const numeros = [5, 10, 15, 20]
console.log(numeros)
let soma = 0
numeros.forEach(num => soma += num)
console.log(soma)

console.log("\nforEach não permite interrupções no laço. Ou seja, não podemos usar break ou continue")

