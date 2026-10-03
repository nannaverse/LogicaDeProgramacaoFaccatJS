/*   Escreval ("Digite a temperatura em Fahrenheit: ")
   leia (fahrenheit)
   celsius <- (fahrenheit - 32) * 5 / 9
   Escreval ("O valor em Celsius é: ", celsius, "ºC") */

   alert("Fahrenheit para Celsius")

   let fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit: "))

   let celsius = (fahrenheit - 32) * 5 / 9

   alert(`O valor em Celsius é: ${celsius}°C`)