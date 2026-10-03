/*  Escreva um algoritmo que leia as idades de 2 homens e
 de 2 mulheres(considere que as idades dos homens serão sempre diferentes
entre si bem como as das mulheres). Calcule e escreva a soma
das idades do homem mais velho com a mulher mais nova, e o produto das
idades do homem mais novo com a mulher mais velha.

Escreval ("Digite a idade do primeiro homem: ")
   Leia (homem)
   Escreval ("Digite a idade do segundo homem: ")
   Leia (homem2)
   Escreval ("Digite a idade do primeiro mulher: ")
   Leia (mulher)
   Escreval ("Digite a idade do segundo mulher: ")
   Leia (mulher2)

   Se homem > homem2 entao
      maisVelho <- homem
      maisNovo <- homem2
   Senao
      maisVelho <- homem2
      maisNovo <- homem
   Fimse

   Se mulher > mulher2 entao
      maisVelha <- mulher
      maisNova <- mulher2
   Senao
      maisVelha <- mulher2
      maisNova <- mulher
   Fimse

   soma <- maisVelho + maisNova
   multiplicacao <- maisVelha * maisNovo
   
   Escreval ("A soma do homem mais velho para a mulher mais nova é: ", soma)
   Escreval ("")
   Escreval ("A multiplicação da mulher mais velha para o homem mais novo é: ", multiplicacao) */

alert("Calculo de Idade de 2 Homens e Mulheres")

let homem = parseInt(prompt("Digite a idade do primeiro homem: "))
let homem2 = parseInt(prompt("Digite a idade do segundo homem: "))
let mulher = parseInt(prompt("Digite a idade da primeira mulher: "))
let mulher2 = parseInt(prompt("Digite a idade da primeira mulher: "))

let maisVelho
let maisNovo
let maisVelha
let maisNova


if (homem > homem2) {
    maisVelho = homem
    maisNovo = homem2
} else {
    maisVelho = homem2
    maisNovo = homem
}

if (mulher > mulher2) {
    maisVelha = mulher
    maisNova = mulher2
} else {
    maisVelha = mulher2
    maisNova = mulher
}

let soma = maisVelho + maisNova
let multiplicacao = maisVelha * maisNovo

alert("A soma do homem mais velho para a mulher mais nova é: " + soma)
alert("A multiplicação da mulher mais velha para o homem mais novo é: " + multiplicacao) 
