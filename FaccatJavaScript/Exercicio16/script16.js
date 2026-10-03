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

16) As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
escreva o custo total da compra.

*/

alert("Valor das maçãs")
let macas = parseInt(prompt("Digite a quantidade de maçãs que você comprou: "))

if (macas < 12) {
    valor = 1.30 * macas
}
else {
    valor = 1.00 * macas
}

alert("O preço a se pegar pelas maçãs é: " + valor)