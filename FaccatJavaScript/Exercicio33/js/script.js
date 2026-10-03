/*  Ler dois valores e imprimir uma das três mensagens a seguir:
// ‘Números iguais’, caso os números sejam iguais
// ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ‘Segundo maior’, caso o segundo seja maior que o primeiro

   Escreval ("Digite o primeiro número: ")
   Leia (numero)
   Escreval ("Digite o segundo número: ")
   Leia (numero2)
   Se (numero = numero2) entao
      Escreval ("Números Iguais")
   Senao
      Se (numero > numero2) entao
         Escreval ("Primeiro é maior")
      Senao
         Escreval ("Segundo é maior")
      Fimse
   Fimse */

alert("Valores iguais, maior ou menor")

let numero = parseInt(prompt("Digite o primeiro número: "))
let numero2 = parseInt(prompt("Digite o segundo número: "))


if (numero == numero2) {
    alert("Números Iguais")
} else
    if (numero > numero2) {
        alert("Primeiro é maior")
    } else {
        alert("Segundo é maior")
    }