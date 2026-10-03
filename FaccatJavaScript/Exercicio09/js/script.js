/*    Escreva ("Digite o seu sálario aqui: ")
   Leia (salario)
   Escreva ("Digite o percentual de reajuste: ")
   Leia (percentual)
   salarioNovo <- salario + (salario * (percentual / 100))
   Escreval ("O seu novo salário é: ", salarioNovo) */

   alert("Salário novo")

   let salario = parseFloat(prompt("Digite o seu salário aqui: "))
   let percentual = parseFloat(prompt("Digite o percentual de reajuste: "))

   let salarioNovo = salario + (salario * (percentual / 100))

   alert(`O seu novo salário é: ${salarioNovo}`)