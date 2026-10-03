/*  Escreval("Formação de um Triângulo")
   Escreval ("Digite o valor do lado A da figura: ")
   Leia (a)
   Escreval ("Digite o valor do lado B da figura: ")
   Leia (b)
   Escreval ("Digite o valor do lado C da figura: ")
   Leia (c)

   Se (a < b + c) e (b < a + c) e (c < a + b) entao
      Escreval ("Os valores informados FORMAM um triângulo!")
   Senao
      Escreval ("Os valores informados NÃO formam um triângulo!") */

alert("Formação de um Triângulo")

let ladoA = parseFloat = (prompt("Digite o valor do lado A da figura: "))
let ladoB = parseFloat = (prompt("Digite o valor do lado B da figura: "))
let ladoC = parseFloat = (prompt("Digite o valor do lado C da figura: "))

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    alert("Os valores informados FORMAM um triângulo!")
} else {
    alert("Os valores informados NÃO formam um triângulo!")
}
