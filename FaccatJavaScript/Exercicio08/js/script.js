 /* Escreva ("Digite a quantidade de números totais de eleitores: ")
   Leia (eleitores)
   Escreva ("Digite o número de votos brancos: ")
   Leia (brancos)
   Escreva ("Digite o número de votos nulos: ")
   Leia (nulos)
   Escreva ("Digite o número de votos válidos: ")
   Leia (validos)
   percentualVotosBrancos<- brancos/eleitores*100
   percentualVotosNulos<- nulos/eleitores*100
   percentualVotosValidos<- validos/eleitores*100
   Escreval ("A porcentagem de votos brancos é: ", percentualVotosBrancos, "%")
   Escreval ("A porcentagem de votos nulos é: ", percentualVotosNulos, "%")
   Escreval ("A porcentagem de votos válidos é: ", percentualVotosValidos, "%") */

   alert("Total de Eleitores")

   let eleitores = parseInt(prompt("Digite a quantidade de números totais de eleitores: "))  
   let brancos = parseInt(prompt("Digite o número de votos brancos: "))
   let nulos = parseInt(prompt("Digite o número de votos nulo: "))
   let validos = parseInt(prompt("Digite o número de votos válidos: "))

let percentualVotosBrancos = brancos /eleitores *100
let percentualVotosNulos = nulos /eleitores *100
let percentualVotosValidos = validos /eleitores *100

   alert("A porcentagem de votos brancos é: " + percentualVotosBrancos + "%")
   alert("A porcentagem de votos nulos é: " + percentualVotosNulos + "%")
   alert("A porcentagem de votos válidos é: " + percentualVotosValidos + "%") 