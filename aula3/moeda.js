// De modo semelhante ao exemplo do dado,
// escreva uma função que simula o comportamento
// de uma moeda.
// Sua função deve
//    - se chamar "jogaMoeda",
//    - não receber nenhum argumento
//    - devolver uma das strings: "cara" ou "coroa"
// Escreva sua função entre as linhas


const jogaMoeda = () =>{
const x = Math.floor(Math.random()*2)
let res = ""
if (x==1) res = "cara";
else res = "coroa";
return res;
}

console.log(jogaMoeda())


// não altere o código abaixo
//
// Dois irmãos querem jogar video game e não conseguem
// se decidir qual jogo jogar. Estão na dúvida entre
// NeedForSpeed e The Sims.
// O código abaixo usa a função "jogaMoeda" para simular
// a decisão deles, no caso de "cara" eles jogarão NeedForSpeed,
// caso contrário, jogarão TheSims.

const moeda = jogaMoeda();

if (moeda == "cara")
  console.log("Jogarão Need For Speed");
else if (moeda == "coroa")
  console.log("Jogarão TheSims");
else
  console.log("Era pra isso acontecer?");
