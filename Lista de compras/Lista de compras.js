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