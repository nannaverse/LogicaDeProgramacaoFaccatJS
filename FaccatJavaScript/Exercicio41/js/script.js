/*   Escreval ("Média de notas")
   Escreval ("Digite a sua primeira nota: ")
   Leia (primeiraNota)
   Escreval ("Digite a sua segunda nota: ")
   Leia (segundaNota)
   Escreval ("Digite a sua terceira nota: ")
   Leia (terceiraNota)
   Escreval ("Digite a Média dos exercícios que fazem parte da avaliação: ")
   Leia (mediaExercicios)

   mediadeAproveitamento <- (primeiraNota + (segundaNota * 2) + (terceiraNota * 3) + mediaExercicios)/7

   Se mediadeAproveitamento >= 9.0 entao
      Escreval ("Sua nota é: A")
   Senao
      Se (mediadeAproveitamento >= 7.5) e (mediadeAproveitamento < 9.0) entao
         Escreval ("Sua nota é: B")
      Senao
         Se (mediadeAproveitamento >= 6.0) e (mediadeAproveitamento < 7.5) entao
            Escreval ("Sua nota é: C")
         Senao
            Escreval ("Sua nota é: D")
         Fimse
      Fimse
   Fimse */

alert("Média de Notas")

let primeiraNota = parseFloat(prompt("Digite a sua primeira nota: "))
let segundaNota = parseFloat(prompt("Digite a sua segunda nota: "))
let terceiraNota = parseFloat(prompt("Digite a sua terceira nota: "))
let mediaExercicios = parseFloat(prompt("Digite a Média dos exercícios que fazem parte da avaliação: "))

let mediaAproveitamento = (primeiraNota + (segundaNota * 2) + (terceiraNota * 3) + mediaExercicios) / 7


if (mediaAproveitamento >= 9.0) {
    alert("Sua nota é: A")
} else
    if (mediaAproveitamento >= 7.5) {
        alert("Sua nota é: B")
    } else
        if (mediaAproveitamento >= 6.0) {
            alert("Sua nota é: C")
        } else {
            alert("Sua nota é: D")
        }