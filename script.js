//Declaração de variavel
let nome = "Yan"
let idade = 20;
let estado_civil = false
let i = "number"
console.log(idade);

//Estrutura de Condição
if(idade >= 21){
    console.log("Voce é casado");
} else {
    console.log("Voce é solteiro")
}

for (let i = 0; i <11; i++){
    if (i % 2 ==0){
        console.log("Par");
    } else {
        console.log("impar")
    }
}
//Média de 3 elementos
const numeros = [2,4,6];
let soma = 0;
for (let i =0; i< numeros.length; i++){
    soma += numeros [i];
}
const media = soma/numeros.length;
console.log("A média dos elementos é:", media);

//Algoritimo com 5% de desconto
const numero = 20
const desconto = numero - (numero *0,05)
console.log ("o valor com desconto:"+desconto);


//
let nomedofilme = {
    filme: "Vingadores:Ultimato",
    genero: "Ação",
    Nota: "10"
}
console.log(nomedofilme)

outro teste
