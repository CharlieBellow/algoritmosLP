// selection sort - seleção por posição

const livros = require("./listaLivros.js")

const menorValor = require('./menorValor')

for (let atual = 0; atual < livros.length -1; atual++) {
  let menor = menorValor(livros, atual)
  let livroAtual = livros[atual];
  console.log("posicao atual", atual);
  console.log("livro atual", livros[atual]);
  let livroMenorPreco = livros[menor];
  console.log("livro menor preço", livros[menor]);
  livros[atual] = livroMenorPreco;
  livros[menor] = livroAtual;
}

console.log(livros);

/* 

para varrer arrays em busca de dados específicos, podemos utilizar includes(), find() ou filter(), entre outros, e para ordenar arrays podemos usar o método sort().
*/


