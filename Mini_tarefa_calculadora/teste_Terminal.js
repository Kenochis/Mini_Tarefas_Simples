
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// função utilitária para usar rl.question com Promises
function question(prompt) {
  return new Promise(resolve => rl.question(prompt, answer => resolve(answer)));
}

// trunca (não arredonda) até 7 casas decimais
function truncar7(valor) {
  if (typeof valor !== "number" || !isFinite(valor)) return valor;
  return Math.trunc(valor * 1e7) / 1e7;
}

function calcular(n1, op, n2) {

  // garantir que n1 e n2 sejam números (n2 pode ser undefined para operações unárias)
  const a = Number(n1);
  const b = n2 === undefined ? undefined : Number(n2);

  if (Number.isNaN(a) || (n2 !== undefined && Number.isNaN(b))) {
    return "Erro: um dos valores não é um número válido.";
  }

  switch (op) {
    case "+":
      return truncar7(a + b);

    case "-":
      return truncar7(a - b);

    case "*":
      return truncar7(a * b);

    case "/":
      if (b === 0) return "Erro: divisão por zero.";
      return truncar7(a / b);

    case "%": // porcentagem: interpreta como (a / 100) * b
      return truncar7((a / 100) * b);

    case "✓": // raiz quadrada de a (ignoramos b)
      if (a < 0) return "Erro: não existe raiz real de número negativo.";
      return truncar7(Math.sqrt(a));

    default:
      return "Operação inválida!";
  }
}

(async function main() {
  try {
    const n1 = await question("Digite o 1° número: ");

    // perguntar operação antes para ficar no "meio"
    const op = await question("Digite a operação (+, -, *, /, %, ✓): ");
    
    let n2;

    // se a operação for unária (✓), não pedimos n2
    if (op !== "✓") {
      n2 = await question("Digite o 2° número: ");
    }

    const resultado = calcular(n1, op, n2);

    // mostrar a expressão de forma legível
    if (op === "✓") {
      console.log(`\n${op} ${Number(n1)} = ${resultado}\n`);
    } else {
      console.log(`\n${Number(n1)} ${op} ${Number(n2)} = ${resultado}\n`);
    }

  } 
  catch (err) {
    console.error("Erro inesperado:", err);
  } 
  finally {
    rl.close();
  }
  
})();

// Material de estudo sobre teste no terminal.