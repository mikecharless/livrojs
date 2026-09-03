const prompt = require("prompt-sync")() //adiciona o pacote prompt-sync que permite entrada de dados

const valorCompra = Number(prompt("Valor da compra R$: "))

/*let numeroParcela
let valorParcela
if (valorCompra < 40){
    numeroParcela = 1
    valorParcela = valorCompra
} else if (valorCompra < 140) {
    numeroParcela = Math.floor(valorCompra/20)
    valorParcela = valorCompra/numeroParcela
} else {
    numeroParcela = 6
    valorParcela = valorCompra/numeroParcela8
}*/
const aux = Math.floor(valorCompra/20)
const numeroParcela = aux == 0 ? 1 : aux > 6 ? 6 : aux  //operador ternário
const valorParcela = valorCompra/numeroParcela

console.log(`A compra pode ser paga em ${numeroParcela}x de ${valorParcela.toFixed(2)}`)

