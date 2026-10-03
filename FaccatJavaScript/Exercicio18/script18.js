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

18) Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).

*/

alert ("Você pode votar?")
let anoatual = parseInt (prompt("Digite o ano em que estamos: "))
let anonascimento = parseInt (prompt("Digite o seu ano de nascimento: "))

let subtracao = anoatual - anonascimento

if (subtracao >= 16) { 
    alert ("Você pode votar esse ano!")
}
else 
{
    alert ("Você ainda não pode votar")
}
