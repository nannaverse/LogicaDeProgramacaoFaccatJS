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

19) Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.

*/

alert("Ler dois valores e identificar qual é maior")

let valor = parseInt(prompt("Digite o primeiro valor: "))
let valor2 = parseInt(prompt("Digite o segundo valor: "))

if (valor > valor2) {
    alert("O maior número é: " + valor)
} else {
    alert("O maior valor é: " + valor2)
}