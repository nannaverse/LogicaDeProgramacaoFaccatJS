/*   Escreval ("Digite a quantidade em Kg de morangos: ")
   Leia (morangos)
   Escreval ("Digite a quantidade em Kg de maçãs: ")
   Leia (macas)

   Se (morangos <= 5) entao
      precoMorangos <- 2.50 * morangos
   Senao
      precoMorangos <- 2.20 * morangos
   Fimse

   Se (macas <= 5) entao
      precoMacas <- 1.80 * macas
   Senao
      precoMacas <- 1.50 * macas
   Fimse

   valorKg <- morangos + macas
   valorReal <- precoMorangos + precoMacas
   contaFinal <- valorReal

   Se (valorkg > 8) ou (valorreal > 25) entao
      contaFinal <- valorReal -(valorReal * 0.10)
   Fimse

   Escreval ("")
   Escreval ("O total a ser pago é: ", contaFinal) */

alert("Desconto de Morangos e Maçãs")

let morangos = parseFloat(prompt("Digite a quantidade em Kg de morangos: "))
let macas = parseFloat(prompt("Digite a quantidade em Kg de macas: "))

let precoMorangos
let precoMacas

if (morangos <= 5) {
    precoMorangos = 2.50 * morangos
} else {
    precoMorangos = 2.20 * morangos
}

if (macas <= 5) {
    precoMacas = 1.80 * macas
} else {
    precoMacas = 1.50 * macas
}

let valorKg = morangos + macas
let valorReal = precoMorangos + precoMacas
let contaFinal = valorReal

if (valorKg > 8 || valorReal > 25) {
    contaFinal = valorReal - (valorReal * 0.10)
}

alert("O total a ser pago é: " + contaFinal)