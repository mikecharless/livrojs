const prompt = require("prompt-sync")() //adiciona o pacote prompt-sync para entrada de dados

console.log("Proma Anos de Copa do mundo")
console.log(`${"-".repeat(27)}`)


/*while (true){
    const ano = Number(prompt("Ano:"))
    if (ano == 0){
        break
    } else if (ano < 1930){
        console.log(`Não houve copa do mundo antes de 1930`)
    } else if (ano == 1942 || ano == 1946){
        console.log(`Não houve copa do mundo em ${ano}. Segunda Guerra Mundial!`)
    } else if ((ano - 1930) % 4 != 0){
        console.log(`${ano} não é ano de copa do mundo`)
    } else {
        console.log(`${ano} é ano de copa do mundo`)
    }
}*/




/*do {
    const ano = Number(prompt("Ano: "))
    if (ano == 0){
        break
    }

    if (ano < 1930 || ((ano - 1030) % 4 != 0) || ano == 1942 || ano == 1946){
        console.log(`${ano} não é ano de copa do mundo`)
    } else {
        console.log(`${ano} é ano de copa do mundo`)
    }
} while (true)*/
