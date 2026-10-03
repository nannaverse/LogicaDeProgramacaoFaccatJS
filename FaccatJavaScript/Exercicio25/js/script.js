/*    Escreval ("Digite o número da sua conta: ")
   Leia (conta)
   Escreval ("Digite o saldo da sua conta: ")
   Leia (saldo)
   Escreval ("Digite o débito da sua conta: ")
   Leia (debito)
   Escreval ("Digite o crédito da sua conta: ")
   Leia (credito)
   saldoAtual<- saldo - debito + credito
   Se saldoAtual >= 0 entao
      Escreval ("O seu saldo é Positivo!")
   Senao
      Escreval ("O seu saldo é Negativo!")
   Fimse */ 

   alert("Saldo Positivo ou Negativo")

   let conta = parseFloat(prompt("Digite o número da sua conta: "))
   let saldo = parseFloat(prompt("Digite o saldo da sua conta: "))
   let debito = parseFloat(prompt("Digite o seu débito da sua conta: "))
   let credito = parseFloat(prompt("Digite o crédito da sua conta: "))

   let saldoAtual = saldo = debito + credito 

   if (saldoAtual >= 0){
    alert("O seu saldo é Positivo!")
   }else {
    alert("O seu saldo é Negativo")
   }