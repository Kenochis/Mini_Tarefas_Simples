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

function tabuada (numero, limite) {
    for (let i = 1; i <= limite; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// IIFE assíncrona (função autoexecutável) usada para rodar tudo com async/await
(async function main() {
  try {
    const n1 = await question("Digite o 1° número: ");  // Usa a função "question" e espera a resposta do usuário (await)

    const lt = await question("Digite o limite de equações: "); // Pergunta o limite e também aguarda a resposta

    tabuada(n1, lt);  // Chama a função tabuada (resultado na tela, não precisa retornar nada)

  } catch (err) {
    console.error("Erro inesperado:", err);   // Caso aconteça um erro inesperado, ele será capturado e mostrado aqui
  } finally {
    rl.close();   // Fecha a interface readline após terminar o programa (sempre executa)
  }
  
})();
