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

21) Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.

*/

alert("Horas no jogo de Xadrez")
let inicio = parseInt (prompt("Digite o começo da partida: "))
let fim = parseInt (prompt("Digite o começo da partida: "))

if (inicio <= fim) {
    conta = fim - inicio
} 
else {
    conta = fim - inicio + 24
}

alert ("O jogo de xadrez durou: " + conta + " horas")