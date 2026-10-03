/*    Escreval ("Digite um número:" )
   Leia (numero)
   Se numero > 0 entao
      Escreval ("É um número positivo")
   Senao
      Se numero < 0 entao
         Escreval ("É um número negativo")
      Senao
         Escreval ("Número 0")
      Fimse
   Fimse */

alert("Número positivo, negativo ou zero")

let numero = parseInt(prompt("Digite um número: "))

if (numero > 0) {
    alert("É um número positivo")
} else {
    if (numero < 0) {
        alert("É um número negativo")
    } else {
        alert("Número 0")
    }
}