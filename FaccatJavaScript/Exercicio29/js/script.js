/*    Escreval ("Digite o primeiro número: ")
   Leia (primeiro)
   Escreval ("Digite o segundo número: ")
   Leia (segundo)
   Escreval ("Digite o terceiro número: ")
   Leia (terceiro)

   Se (primeiro < segundo ) e (primeiro < terceiro) entao
      soma <- terceiro + segundo
   Senao
      Se(segundo < terceiro) entao
         soma <- terceiro + primeiro
      Senao
         soma <- segundo + primeiro
      Fimse
   Fimse
   
    Escreval ("A soma dos maiores números é: ", soma) */

alert("Soma dos 2 maiores valores")

let numero1 = parseInt(prompt("Digite o primeiro número: "))
let numero2 = parseInt(prompt("Digite o segundo número: "))
let numero3 = parseInt(prompt("Digite o terceiro número: "))

let soma

if (numero1 < numero2 && numero1 < numero3) {
    soma = numero3 + numero2
} else
    if (numero2 < numero3) {
        soma = numero3 + numero1
    } else {
        soma = numero2 + numero1
    }

alert(`A soma dos maiores números é: ${soma}`)