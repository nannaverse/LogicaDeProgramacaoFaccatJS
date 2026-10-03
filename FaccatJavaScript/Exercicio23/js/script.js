/*    Escreval ("Digite o seu nome: ")   //não tinha o escreval
   Leia (nome)
   Escreval ("Digite a sua altura: ") //não pedia a entrada de dados da altura
   Leia (altura)
   Escreval ("Digite o seu sexo (M ou F): ")
   Leia (sexo)
   Se (sexo = "M") entao
      pesoIdeal<- (72.7 * altura) - 58
   Senao
      pesoIdeal<- (62.1 * altura) - 44.7
   Fimse
   Escreval("O seu peso ideal é: ", pesoIdeal) */

alert("Peso Ideal")

let nome = prompt("Digite o seu nome: ")
let altura = parseFloat(prompt("Digite a sua altura: "))
let sexo = prompt("Digite o seu sexo (M ou F): ")

if (sexo = "M") {
    pesoIdeal = (72.7 * altura) - 58
} else {
    pesoIdeal = (62.1 * altura) - 44.7
}

alert(`O seu peso é: ${pesoIdeal}`)