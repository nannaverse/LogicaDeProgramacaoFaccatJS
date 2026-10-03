/*  Escreval ("Digite suas horas trabalhadas no mês: ")
   Leia (mes)
   Escreval ("Digite o seu salário por hora: ")
   Leia (salario)
   se >160 entao
      valorHoraExtra <- salario * 1.5
      horasExtras <- mes - 160
      salarioTotal <- (160 * salario) + (horasExtras * valorHoraExtra)
   senao
      salarioTotal <- mes * salario
   fimse
   Escreval ("O seu salário total é: R$ ", salariototal) */

alert("Salário Total do Funcionário")

let mes = parseInt(prompt("Digite suas horas trabalhadas no mês: "))
let salario = parseFloat(prompt("Digite o seu salário ´pr hora: "))

let salarioTotal

if (mes > 160) {
    let valorHoraExtra = salario * 1.5
    let horasExtras = mes - 160
    salarioTotal = (160 * salario) + (horasExtras * valorHoraExtra)
} else {
    salarioTotal = mes * salario
}

alert(`O seu salário total é: R$ ${salarioTotal}`)