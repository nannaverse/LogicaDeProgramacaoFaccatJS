/*
1º Entrada
2º Processamento
3º Saída 

//Estrutura de decisão Composta
// se idade < 18 entao
//  Escreval("Não entra na balada")
// Senao
// Escreval ("Entra na balada)")
// fimse

20) Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.

*/

alert("Números em ordem crescente")
let numero = parseInt(prompt("Digite o primeiro número: "))
let numero2 = parseInt(prompt("Digite o segundo número: "))

if (numero > numero2) {
    alert("Os números na ordem crescente é: " + numero2 + ", " + numero)
}
else {
    alert("Os números na ordem crescente é: " + numero + ", " + numero2)
}