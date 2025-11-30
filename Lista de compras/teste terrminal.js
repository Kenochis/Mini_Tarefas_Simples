const readline = require("readline"); // importa o readline para utilizar suas funções.

const rl = readline.createInterface({ // cria a interface de entrada e saida.
  input: process.stdin,
  output: process.stdout
});

// função utilitária para usar rl.question com Promises
function question(prompt) {
  return new Promise(resolve => rl.question(prompt, answer => resolve(answer)));
}

// lista principal (visível para todas as funções)
let listaDeCompras = [
  { nome: "Biscoito", preco: 3.50 }
];

function adicionarItem(texto) {
  const partes = texto.split(","); // divide o texto por vírgula.

  if (partes.length < 2) { // verificando se tem menos de 2 itens.
    console.log("Formato inválido. Use: nome, preco");
    return;
  }

  const nome = partes[0].trim();         // pega antes da vírgula.
  const preco = Number(partes[1].trim()); // pega depois da vírgula.

  if (!nome || isNaN(preco)) { // verificando se não está errado.
    console.log("Formato inválido. Use: nome, preco");
    return;
  }

  listaDeCompras.push({ nome, preco }); // adicionando um objeto.
  console.log(`Item "${nome}" adicionado com sucesso!`);
}

function removerItem(nome) {
  const tamanhoAntes = listaDeCompras.length; // tamanho original antes de mexer.

  listaDeCompras = listaDeCompras.filter(item => item.nome !== nome); // filtrando propriedades que sejam diferente do nome digitado.

  if (listaDeCompras.length === tamanhoAntes) { // se continuar o mesmo tamanho, não existe na lista.
    console.log("Item não encontrado.");
  } else {                                      // se não, o item foi excluido.
    console.log(`Item "${nome}" removido.`); 
  }
}

function listarItens() {
  console.log("\n--- LISTA DE COMPRAS ---"); // Título.

  listaDeCompras.forEach(item => {
    console.log(`${item.nome} - R$ ${item.preco.toFixed(2)}`); // imprimi na tela a lista com suas propriedades.
  });
}

function mostrarTotal() {
  const total = listaDeCompras.reduce((acc, item) => acc + item.preco, 0); // soma todos os preco da lista e retorna um numero.
  console.log(`\nTotal: R$ ${total.toFixed(2)}`);
}

async function main() {
  try {
    const opcao = Number(await question( // transforma a opção (string) em um número.
      "\nEscolha uma opção:\n1 - Adicionar\n2 - Remover\n3 - Listar\n4 - Total\n5 - Sair\n> "
    ));

    let entrada; // entrada do usúario.

    switch (opcao) {
      case 1:
        entrada = await question("Digite o item (nome e preço): "); // pede para digitar o nome e preço (separando eles por vírgula).
        adicionarItem(entrada);
        break;

      case 2:
        entrada = await question("Digite o nome do item para remover: "); // pede apenas o nome item dentro da lista.
        removerItem(entrada);
        break;

      case 3:
        listarItens();
        break;

      case 4:
        mostrarTotal();
        break;

      case 5:
        console.log("Encerrando...");
        rl.close();     // fecha a interface do input e output.
        return;

      default:
        console.log("Opção inválida."); // caso digite um número ou texto fora das opções entre 1 a 5.
        break;
    }

    main(); // volta ao menu
  } catch (err) {
    console.error("Erro inesperado:", err); // em caso de erro.
    rl.close();
  }
}

main(); // chamando a função async main.
