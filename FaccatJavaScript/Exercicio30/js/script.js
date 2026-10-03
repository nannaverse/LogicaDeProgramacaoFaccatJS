/*   Escreval ("Digite o primeiro número: ")
   Leia (primeiro)
   Escreval ("Digite o segundo número: ")
   Leia (segundo)
   Escreval ("Digite o terceiro número: ")
   Leia (terceiro)

   Se (primeiro < segundo) e (segundo < terceiro) entao
      Escreval ("Números em ordem crescente: ", primeiro, segundo, terceiro)
   Senao
      Se (segundo < primeiro) e (primeiro < terceiro) entao
         Escreval ("Números em ordem crescente: ", segundo, primeiro, terceiro)
      Senao
         Se (terceiro < segundo) e (segundo < primeiro) entao
            Escreval ("Números em ordem crescente: ",  terceiro, segundo, primeiro)
         Senao
            Se (primeiro < terceiro) e (terceiro < segundo) entao
               Escreval ("Números em ordem crescente: ",  primeiro, terceiro, segundo)
            Senao
               Se (segundo < terceiro) e (terceiro < primeiro) entao
                  Escreval ("Números em ordem crescente: ",  segundo, terceiro, primeiro)
                  Senao
                  Escreval ("Números em ordem crescente: ", terceiro, segundo, primeiro)
               Fimse
            Fimse
         Fimse
      Fimse
   Fimse */

alert("3 Valores em Ordem Crescente")

let numero1 = parseInt(prompt("Digite o primeiro número: "))
let numero2 = parseInt(prompt("Digite o segundo número: "))
let numero3 = parseInt(prompt("Digite o terceiro número: "))

if (numero1 < numero2 && numero2 < numero3) {
    alert(`Números em ordem crescente: ${numero1}, ${numero2}, ${numero3}`)
} else
    if (numero2 < numero1 && numero1 < numero3) {
        alert(`Números em ordem crescente: ${numero2}, ${numero1}, ${numero3}`)
    } else
        if (numero3 < numero2 && numero2 < numero1) {
            alert(`Números em ordem crescente: ${numero3}, ${numero2}, ${numero1}`)
        } else
            if (numero1 < numero3 && numero3 < numero2) {
                alert(`Números em ordem crescente: ${numero1}, ${numero3}, ${numero2}`)
            } else
                if (numero2 < numero3 && numero3 < numero1) {
                    alert(`Números em ordem crescente: ${numero2}, ${numero3}, ${numero1}`)
                } else {
                    alert(`Números em ordem crescente: ${numero3}, ${numero1}, ${numero2}`)
                }

