// algoritmo é uma sequencia finita de ações executáveis que visam obter uma solução para um determinado tipo de problema.

// importando o array de livros
const livros = require("./listaLivros.js")

//let maisBarato = 0;

// laço de repetição

function menorValor(arrProdutos, posicaoInicial) {
  let maisBarato = posicaoInicial;
  for (let atual = posicaoInicial; atual < arrProdutos.length; atual++){
    if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
      maisBarato = atual;
    }
  }
  return maisBarato;
}

//console.log(`o livro mais barato custa ${livros[maisBarato].preco} e o titulo é ${livros[maisBarato].titulo}`);

// ordenando arrays - reaproveitando código

module.exports = menorValor;