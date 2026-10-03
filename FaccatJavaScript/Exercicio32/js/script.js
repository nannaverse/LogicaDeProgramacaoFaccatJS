/*   Escreval ("Digite o nome do Primeiro Time: ")
   Leia (time1)
   Escreval ("Digite o número de gols do Time ", time1, ": ")
   Leia (gols)
   Escreval ("Digite o nome do Segundo Time: ")
   Leia (time2)
   Escreval ("Digite o número de gols do Time ", time2, ": ")
   Leia (gols2)

   Se gols > gols2 entao
      Escreval ("O Time ", time1, " é o vencedor!")
   Senao
      Se gols2 > gols entao
         Escreval ("O Time ", time2, " é o vencedor!")
      Senao
         Escreval ("EMPATE!")
      Fimse
   Fimse */

alert("Time Vencedor")

let time1 = prompt("Digite o nome do Primeiro Time: ")
let gols = parseInt(prompt(`Digite o número de gols do Time ${time1}: `))
let time2 = prompt("Digite o nome do Segundo Time: ")
let gols2 = parseInt(prompt(`Digite o número de gols do Time ${time2}: `))

 if (gols > gols2){
    alert(`O Time ${time1} é o vencedor!`)
 }else
    if (gols2 > gols){
alert(`O Time ${time2} é o vencedor!`)
    } else{
        alert("EMPATE!")
    }
         