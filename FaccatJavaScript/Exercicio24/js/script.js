/*  Escreval ("Digite o seu salário fixo: ")
 Leia (salarioFixo)
 Escreval ("Digite o valor das suas vendas do mês: ")
 Leia (vendasMes)
 Se vendasMes <= 1500 entao
 salarioTotal<- salariofixo + (vendasMes * 0.03)
 Senao
  salarioTotal<-  salariofixo + (1500 * 0.03) + ((vendasMes - 1500) * 0.05)
  Fimse
   Escreval ("O seu salário total é: ", salarioTotal) */

   alert("Salário Total")

   let salarioFixo = parseFloat(prompt("Digite o seu salário fixo: "))
   let vendasMes = parseFloat(prompt("Digite o valor das suas vendas do mês: "))

   let salarioTotal

   if (vendasMes <= 1500){
    salarioTotal = salarioFixo + (vendasMes * 0.03)
   } else {
    salarioTotal = salarioFixo + (1500 * 0.03) + ((vendasMes - 1500) * 0.05)
   }

      alert(`O seu salário total é: ${salarioTotal}`)