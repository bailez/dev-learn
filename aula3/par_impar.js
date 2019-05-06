// parte 1:
// Escreva uma função chamada "ehPar" que recebe um 
// número x como parâmetro e devolve (retorna) um 
// booleano indicando se x é par
// obs: utilize o jeito moderno (arrow function)
// dica: lembre-se do operador % (resto da divisão)

const ehPar = (x) => {
return x%2 == 0;}



// parte 2:
// Escreva uma função chamada ehImpar que recebe um
// número x como parâmetro e, usando a ehPar internamente,
// devolve (retorna) um booleano indicando se x é ímpar

const ehImpar = (x) =>{
return x%2 != 0;
}


