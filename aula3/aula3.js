//console.log("aula 3")

const dado = (x,y,z) => {
    console.log("aaa");
    return (x + y + z) ;
}

//console.log(dado(1,2,3));

const f = dado;
console.log("f é ", typeof(f), "e a soma é ", f(2,2,4))
let compra = [441,45,8,99,88,(Math.floor(Math.random()*100))];
//compra.push("a");
console.log(typeof(compra),compra);
compra.pop();
console.log("retirando",typeof(compra),compra);
compra.sort()
console.log("organizando",typeof(compra),compra);
compra.slice(1,3);
console.log("cortando",typeof(compra),compra);

/*
For Each
para cada item da lista

Map
gera uma nova lista

Filter
"filtra" a lista

Reduce
Reduz a lista inteira a um único valor
recebe função callback que decide o criterio para reduzir e o acumulador que

*/

const v = [3,1,5,4,8,76];
const soma = (acumulado, novoItem) => acumulado += novoItem;
const xa = v.reduce(soma, 10);
console.log(xa)