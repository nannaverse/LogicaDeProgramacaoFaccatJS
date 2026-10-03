/*   Escreval ("Digite a altura: ")
  Leia (altura)
  Escreva ("Digite a base: ")
  Leia (base)
  area<- base*altura
  Escreva ("A área do retangulo é: ", area, " metros") */

  alert("Área Retangular")

  let altura = parseFloat(prompt("Digite a altura do retângulo: "))
  let base = parseFloat(prompt("Digite a base do retângulo:"))

  let area = base * altura

  alert(`A área do retângulo é: ${area} metros`)