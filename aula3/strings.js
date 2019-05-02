// Escreva uma função chamada maiorQueTudo que recebe
// uma string s como parâmetro e devolve (retorna) um
// booleano indicando se s é lexicograficamente maior
// que a palavra "tudo"
// lembrete:
//    - "arroz" < "feijão"
//    - "bolinha" < "bolo"
//    - "azul" < "azulado"
//
// dica: strings sabem usar o operador + de forma que
// faça sentido (ela concatena). Será que ela sabe
// usar algum outro operador conhecido neste caso?

//


maiorQueTudo = (s) => {
    return (s > "tudo");}




// alguns casos de teste com a saída esperada
let resp;

resp = maiorQueTudo("banana");
console.log(resp)                   // false

resp = maiorQueTudo("quatorze");
console.log(resp)                   // true

resp = maiorQueTudo("catorze");
console.log(resp)                   // false

resp = maiorQueTudo("tudinho");
console.log(resp)                   // false

resp = maiorQueTudo("ziriguidum");
console.log(resp)                   // true
