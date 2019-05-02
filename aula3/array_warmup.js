// Parte 1:
// Insira na lista v abaixo 10 elementos numéricos
// usando o método "push"
// lembre-se: a sintaxe é v.push(  )

const v = [];

v.push(55,181,34,444,684,57,668,79,19)

console.log(v)

// Parte 2:
// Usando os métodos de listas ensinados em aula,
// faça conforme se pede
// note: uma parte do código já está aí para ajudar
// e todos os códigos têm uma estrutura levemente parecida

// (a)
// Gere uma lista nova w contendo apenas os elementos
// pares da lista v

const ehPar = (x) => x%2 == 0;

let w = v.filter(ehPar)

console.log(w)

// (b)
// Gere uma lista nova u contendo os quadrados dos
// elementos da lista v

const elevaAoQuadrado = x => Math.pow(x,2);


let u = v.map(elevaAoQuadrado)
console.log(u)
// (c)
// Calcule x o elemento menor da lista v
// dica: esta frase tem o mesmo sentido que
//    "reduza sua lista v ao menor elemento dela"

console.log(v)
const reducer = (acc,cur) => {   
    if(acc >= cur) acc = cur;
    return acc;
     }
let r = v.reduce(reducer)
console.log(r)