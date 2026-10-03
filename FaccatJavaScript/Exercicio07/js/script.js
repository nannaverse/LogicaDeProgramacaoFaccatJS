/*    Escreva ("Digite os anos: ")
   Leia (anos)
   Escreva ("Digite os meses: ")
   Leia (meses)
   Escreva ("Digite os dias: ")
   Leia (dias)
   total<- (anos * 365) + (meses * 30) + dias
   Escreva ("A sua idade em dias é: ", total) */

   alert("Programa Idade em Dias")

   let anos = parseInt(prompt("Digite os anos: "))
   let meses = parseInt(prompt("Digite os meses: "))
   let dias = parseInt(prompt("Digite os dias: "))

   let total = (anos * 365) + (meses * 30) + dias

   alert(`A sua idade em dias é: ${total}`)