// Função que recebe um número e um limite, e imprime a tabuada desse número até o limite
function tabuada (numero, limite) {

    // Loop que começa no 1 e vai até o valor do limite digitado
    for (let i = 1; i <= limite; i++) {

        // Mostra cada linha da tabuada no formato: numero x i = resultado
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

