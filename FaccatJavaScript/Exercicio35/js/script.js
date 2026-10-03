/*  Escreval ("Venda de Combustíveis")
   Escreval ("---------------------")
   Escreval ("Digite o número de litros vendidos: ")
   Leia (litros)
   Escreval ("Digite o tipo de combustível (A-álcool, G-gasolina): ")
   Leia (combustivel)

   Escolha combustivel
   Caso "A"
      precoBase <- 2.90

      Se litros <= 20 Entao
         desconto <- 0.03
      Senao
         desconto <- 0.05
      FimSe

      precoComDesconto <- precoBase - (precoBase * desconto)
      valorTotal <- litros * precoComDesconto

      Escreval("Valor a pagar (Álcool): R$ ", valorTotal)

   Caso "G"
      precoBase <- 3.30

      Se litros <= 20 Entao
         desconto <- 0.04
      Senao
         desconto <- 0.06
      FimSe

      precoComDesconto <- precoBase - (precoBase * desconto)
      valorTotal <- litros * precoComDesconto

      Escreval("Valor a pagar (Gasolina): R$ ", valorTotal)
      
   Outrocaso
      Escreval("Tipo de combustível inválido!")
   Fimescolha
 */

alert("Venda de Combustíveis")

let litros = parseFloat(prompt("Digite o número de litros vendidos: "))
let combustivel = prompt("Digite o tipo de combustível (A-álcool, G-gasolina): ")

let precoBase
let desconto
let valorTotal

if (combustivel === "A") {
    precoBase = 2.90

    if (litros <= 20) {
        desconto = 0.03 
    } else {
        desconto = 0.05 
    }

    valorTotal = litros * (precoBase - (precoBase * desconto))
    alert("Valor a pagar (Álcool): R$ " + valorTotal)

} else if (combustivel === "G") {
    precoBase = 3.30

    if (litros <= 20) {
        desconto = 0.04
    } else {
        desconto = 0.06
    }

    valorTotal = litros * (precoBase - (precoBase * desconto))
    alert("Valor a pagar (Gasolina): R$ " + valorTotal)

} else {
    alert("Tipo de combustível inválido!")
}