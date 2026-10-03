/*   Escreval ("Digite o valor de fábrica do carro: ")
  Leia (carro)
  distribuidor<- carro*28/100
   imposto<- carro*45/100
   carronovo<- imposto+distribuidor+carro
  Escreval ("O valor dado a ser pago é: ", carronovo) */

alert("Valor do Carro ao Consumidor")

let carro = parseFloat(prompt("Digite o valor de fábrica do carro: "))

let distribuidor = carro * 28 / 100
let imposto = carro * 45 / 100
let carroNovo = imposto + distribuidor + carro

alert(`O valor dado a ser pago é: ${carroNovo}`)