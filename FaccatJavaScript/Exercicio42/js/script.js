/*   Escreval ("Direito a aposentadoria")
   Escreval ("Digite o seu número de identificação da empresa: ")
   Leia (codigo)
   Escreval ("Digite o ano atual: ")
   Leia (anoAtual)
   Escreval ("Digite o ano do seu nascimento: ")
   Leia (nascimento)
   Escreval ("Digite o ano que entrou na empresa: ")
   Leia (entradaNaEmpresa)

   idade <- anoAtual - nascimento
   Escreval("Sua idade é: ", idade)

   tempoDeTrabalho <- anoAtual - entradaNaEmpresa
   Escreval ("Os seus anos trabalhados são: ", tempoDeTrabalho)

   Se idade >= 65 entao
      Escreval ("Requerer aposentadoria")
   Senao
      Se tempoDeTrabalho >= 30 entao
         Escreval ("Requerer aposentadoria")
      Senao
         Se (idade >= 60) e (tempoDeTrabalho >= 25) entao
            Escreval ("Requerer aposentadoria")
         Senao
            Escreval ("Não requerer")
         Fimse
      Fimse
   Fimse */

alert("Direito à Aposentadoria")

let codigo = parseInt(prompt("Digite o seu número de identificação da empresa: "))
let anoAtual = parseInt(prompt("Digite o ano atual: "))
let nascimento = parseInt(prompt("Digite o ano do seu nascimento: "))
let entradaNaEmpresa = parseInt(prompt("Digite o ano que entrou na empresa: "))

let idade = anoAtual - nascimento
let tempoDeTrabalho = anoAtual - entradaNaEmpresa

alert("Sua idade é: " + idade + " anos")
alert("Seu tempo de trabalho é: " + tempoDeTrabalho + " anos")

if (idade >= 65 || tempoDeTrabalho >= 30 || (idade >= 60 && tempoDeTrabalho >= 25)) {
    alert("Requerer aposentadoria")
} else {
    alert("Não requerer")
}