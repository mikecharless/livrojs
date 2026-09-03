const prompt = require("prompt-sync")() //adiciona o pacote prompt-sync que permite a entrada de dados

const produto = prompt("Produto: ")
const numeroEtiquetas = Number(prompt("Número de etiquetas:"))

let resposta = ""
for (let i = 1; i <= numeroEtiquetas/2; i++){
    resposta += `${produto.padEnd(30)} ${produto.padEnd(30)}\n`
}
if (numeroEtiquetas % 2 == 1){
    resposta += `${produto}`
}

console.log(resposta)
/*for (let i = 1; i<= numeroEtiquetas; i++){
    if (i % 2 != 0){
        resposta += `${produto}${" ".repeat(5)}`
    } else {
        resposta += `${produto}\n`
    }
}

console.log(resposta)*/