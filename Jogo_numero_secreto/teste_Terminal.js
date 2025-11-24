// numero_secreto.js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise(resolve => rl.question(prompt, answer => resolve(answer)));
}

function gerarNumero(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function validarNumero(texto) {
  const n = Number(texto);
  if (!Number.isInteger(n)) return { ok: false, mensagem: "Digite um inteiro válido." };
  return { ok: true, valor: n };
}

async function jogar() {
  console.log("=== Jogo: Número Secreto ===");
  const min = 1;
  const max = 100;
  const secreto = gerarNumero(min, max);
  let tentativas = 0;

  while (true) {
    const chuteTexto = await question(`Chute um número (${min}-${max}) ou digite "sair": `);

    if (chuteTexto.trim().toLowerCase() === "sair") {
      console.log("Você saiu do jogo. Até a próxima!");
      break;
    }

    const valid = validarNumero(chuteTexto);
    if (!valid.ok) {
      console.log("->", valid.mensagem);
      continue;
    }

    const chute = valid.valor;
    if (chute < min || chute > max) {
      console.log(`-> O número precisa estar entre ${min} e ${max}.`);
      continue;
    }

    tentativas++;

    if (chute === secreto) {
      console.log(`\n🎉 Acertou! O número era ${secreto}.`);
      console.log(`Tentativas: ${tentativas}\n`);

      // Pergunta se quer jogar de novo
      const resp = await question("Jogar novamente? (s/n): ");

      if (resp.trim().toLowerCase().startsWith("s")) {
        return jogar(); // reinicia uma nova partida
      } else {
        console.log("Obrigado por jogar!");
        break;
      }
      
    } else if (chute < secreto) {
      console.log("→ Muito baixo. Tente um número maior.\n");
    } else {
      console.log("→ Muito alto. Tente um número menor.\n");
    }
  }
}

(async function main() {
  try {
    await jogar();
  } catch (err) {
    console.error("Erro inesperado:", err);
  } finally {
    rl.close();
  }
})();

// Apenas vendo o jogo. Não fui eu quem criou.