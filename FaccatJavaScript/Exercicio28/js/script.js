/*  Escreval ("Digite o primeiro número: ")
   Leia (primeiro)
   Escreval ("Digite o segundo número: ")
   Leia (segundo)
   Escreval ("Digite o terceiro número: ")
   Leia (terceiro)

   Se (primeiro > segundo) e (primeiro > terceiro) entao
      Escreval("O maior número é: ", primeiro)
   Senao
      Se (segundo > primeiro) e (segundo > terceiro) entao
         Escreval("O maior número é: ", segundo)
      Senao
         Escreval ("O maior número é: ", terceiro)
      Fimse
   Fimse */

alert("Maior valor entre 3")

let numero1 = parseInt(prompt("Digite o primeiro número: "))
let numero2 = parseInt(prompt("Digite o segundo número: "))
let numero3 = parseInt(prompt("Digite o terceiro número: "))

if (numero1 > numero2 && numero1 > numero3) {
    alert(`O maior número é: ${numero1}`)
} else
    if (numero2 > numero1 && numero2 > numero3) {
        alert(`O maior número é: ${numero2}`)
    } else {
        alert(`O maior número é: ${numero3}`)
    }