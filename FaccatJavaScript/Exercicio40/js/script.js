/*  Escreval ("Digite o nome do produto: ")
   Leia (produto)
   Escreval ("Digite a quantidade comprada: ")
   Leia (quantidade)
   Escreval ("Digite o preço unitário: ")
   Leia (preco)

   total <- quantidade * preco

   Se (quantidade <= 5) entao
      totalPagar <-  total - (total * 0.02)
   Senao
      Se (quantidade > 5) e (quantidade <= 10) entao
         totalPagar <-  total - (total * 0.03)
      Senao
         totalPagar <-  total - (total * 0.05)
      Fimse
   Fimse

   Escreval ("O valor a ser pago é: R$", totalPagar) */

alert("Valor a pagar pelo Produto")

let produto = prompt("Digite o nome do produto: ")
let quantidade = parseInt(prompt("Digite a quantidade comprada: "))
let preco = parseFloat(prompt("Digite o preço unitário: "))

let total = quantidade * preco
let totalPagar

if (quantidade <= 5) {
    totalPagar = total - (total * 0.02)
} else
    if (quantidade > 5 && quantidade <= 10) {
        totalPagar = total - (total * 0.03)
    }else {
        totalPagar = total - (total * 0.05)
    }

    alert(`O valor a ser pago é: R$ ${totalPagar}`)