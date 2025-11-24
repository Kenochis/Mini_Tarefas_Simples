// Importa o módulo "readline" do Node.js, que permite capturar texto digitado no terminal
const readline = require("readline");

// Cria uma interface para comunicação: entrada (teclado) e saída (terminal)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função utilitária: transforma rl.question (que usa callbacks) em Promises, permitindo usar async/await para perguntar no terminal.
function question(prompt) {
  return new Promise(resolve => rl.question(prompt, answer => resolve(answer)));
}


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

// IIFE assíncrona (função autoexecutável) usada para rodar tudo com async/await
(async function main() {
  try {
    console.log(`Verificando seu grupo social`)
    const n1 = await question("Digite 1° sua idade: ");  // Usa a função "question" e espera a resposta do usuário (await)

    verificacaoDeIdade(n1);

  } catch (err) {
    console.error("Erro inesperado:", err);   // Caso aconteça um erro inesperado, ele será capturado e mostrado aqui
  } finally {
    rl.close();   // Fecha a interface readline após terminar o programa (sempre executa)
  }
  
})();
