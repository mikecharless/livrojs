//cria as referências aos elementos HTML
const frm = document.querySelector("form")
const resp = document.querySelector("pre")

//adiciona um ouvinte de evento, acionado com o submit
frm.addEventListener("submit", (e) => {
    const numero = Number(frm.inNumero.value)

    //declara e incializa a variável tipo flag
    let temDivisor = 0
    for (let i = 2; i <= numero/2; i++){
        if (numero % 2 == 0){
            temDivisor = 1  //muda a flag
            break           //sai do laço de repetição
        }
    }

    if (numero > 1 && !temDivisor){
        resp.innerText = `${numero} é primo!`
    } else {
        resp.innerText = `${numero} não é primo!`
    }

    /*//declara e inicializa o contador
    let cont = 0
    for (let i = 1; i<= numero; i++){
        if (numero % i == 0){
            cont++
        }
    }
    if (cont == 2){
        resp.innerText = `${numero} é primo`
    } else {
        resp.innerText = `${numero} não é primo`
    }*/

    e.preventDefault()
})