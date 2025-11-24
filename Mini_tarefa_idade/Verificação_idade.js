
function verificacaoDeIdade (idade) {
    if (idade > 0 && idade <= 11) {
        console.log(`Categoria: Criança`);
    } else if (idade >= 12 && idade <= 17) {
        console.log(`Categoria: Adolecente`);
    } else if (idade >= 18 && idade <= 59) {
        console.log(`Categoria: Adulto`);
    } else if (idade >= 60) {
        console.log(`Categoria: Idoso`);
    } else {
        console.log(`idade inválida!`);
    }
};

verificacaoDeIdade(18);