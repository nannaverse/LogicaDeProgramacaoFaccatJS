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

17) Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o
aluno é aprovado). Escrever também a média calculada.

*/

alert("Média de avaliações")
let avaliacao1 = parseInt(prompt("Digite a nota da sua primeira avaliação: "))
let avaliacao2 = parseInt(prompt("Digite a nota da sua segunda avaliação: "))

let media = (avaliacao1 + avaliacao2) / 2

if (media >= 6) {
    alert("Aprovado")
}
else {
    alert("Reprovado")
}


