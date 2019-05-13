const filmes = require("./filmes.json");

// liste os filmes em que o Clark de 38 anos trabalhou
/*const ehPar = (x) => x%2 == 0;


console.log(ehPar(2))
let w = v.filter(ehPar)
console.log(typeof(ehPar))
console.log(w)*/

let listaDeFilmes = Array.from(filmes);

// liste os filmes em que o Clark de 38 anos trabalhou

let filmesDoClark = filme => filme.elenco.filter(e => e.nome === "Clark" && e.idade === 38).length > 0;

listaClark = listaDeFilmes.filter(filmesDoClark).map(f => f.titulo);
console.log(listaClark)

//console.log(filmes[0].elenco[0].nome == 'Jaida' && filmes[0].elenco[0].idade == 19)
// quantos filmes duram menos que 110 minutos?




// gere uma lista com todos os filmes contendo a quantidade de atores no elenco