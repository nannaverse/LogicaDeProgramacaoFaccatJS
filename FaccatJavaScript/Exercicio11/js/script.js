/*  Escreval ("Digite o seu salário mensal: ")
   Leia (salariofixo)
   Escreval ("Digite a sua comissão por carro vendido: ")
   Leia (comissao)
   Escreval ("Digite o total de carros vendidos: ")
   Leia (cvendas)
   Escreval ("Digite o valor total de suas vendas no mês: ")
   Leia (totalvendas)
   comissaofinal<- comissao*cvendas
   comissaoper<- totalvendas*0.05
   salariofinal<- salariofixo+comissaofinal+comissaoper

   Escreval ("O seu salário é: ", salariofinal) */

   alert("Salário Final do Vendedor")

   let salarioFixo = parseFloat(prompt("Digite o seu salário mensal: "))
   let comissao = parseFloat(prompt("Digite a sua comissão por carro vendido: "))
   let carrosVendidos = parseFloat(prompt("Digite o total de carros vendidos: "))
   let totalVendas = parseFloat(prompt("Digite o valor total de suas vendas no mês: "))

   let comissaoFinal = comissao * carrosVendidos
   let comissaoPercentual = totalVendas * 0.05
   let salarioFinal = salarioFixo + comissaoFinal + comissaoPercentual

   alert(`O seu salário é: ${salarioFinal}`)