/*   Escreval ("Digite a quantidade de estoque atual: ")
   Leia (eatual)
   Escreval ("Digite máxima que pode ter no estoque: ")
   Leia (emaxima)
   Escreval ("Digite quantidade miníma que pode ter no estoque: ")
   Leia (eminima)
   quantidadeMedia<- (emaxima+eminima)/2
   Escreval ("A quantidade média é: ", quantidadeMedia)
   Se (eatual>=quantidadeMedia) entao
      Escreval ("Não efetuar compra")
   Senao
      Escreval ("Efetuar compra")
   Fimse */

alert("Quantidade de Estoque")

let estoqueAtual = parseInt(prompt("Digite a quantidade de estoque atual: "))
let estoqueMaxima = parseInt(prompt("Digite a máxima que pode ter no estoque: "))
let estoqueMinima = parseInt(prompt("Digite quantidade miníma que pode ter no estoque: "))

let quantidadeMedia = (estoqueMaxima + estoqueMinima) / 2
alert("A quantidade média é: " + quantidadeMedia)

if (estoqueAtual >= quantidadeMedia){
    alert("Não efetuar compra")
}else {
    alert("Efetuar compra")
}