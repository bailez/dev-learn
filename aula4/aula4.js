//Objetos no JavaScript
//equivalente à dicionário em python
const carro = {
    modelo: 'Golf',
    ano: 2018, 
    valor: 99999, 
    proprietario: {
        nome:'Pedrão',
        idade: 31,
        endereco:{
           logradouro: 'Rua do Ipiranga',
           numero: 1010 
        } 
    },
    buzina: () => {         //Uma função dentro de um objeto é um Método
        console.log("Bibiiii..."); 
    },

    calculaSeguro() {
        const date = new Date();
        const anoAtual = date.getFullYear();
        const idadeCarro = anoAtual - this.ano;
        
        if(idadeCarro > 5)
            return this.valor*0.01;
        return this.valor*0.03
    }

}
carro.proprietario.idade++;
console.log(carro)
//console.log(typeof(carro.proprietario.endereco.logradouro))
/*

forEach : callback que é chamada para cada um
filter  : callback booleana que representa a regra de quem fica e quem não fica
map     : callback de transformação aplicada a cada elemento para gerar o novo
reduce  : callback de redução que representa qual o impacto de cada elemento no acumulador

*/
console.log(carro.proprietario > carro.calculaSeguro)

