/*    Escreval ("Digite a nota do Primeiro Semestre: ")
   Leia (primeirosem)
   Escreval ("Digite a nota do Segundo Semestre: ")
   Leia (segundosem)
   Escreval ("Digite a nota do Terceiro Semestre: ")
   Leia (terceirosem)
   mediafinal<- (primeirosem*2+segundosem*3+terceirosem*5)/10
   Escreval ("Sua Média Final é: ", mediafinal)
   
   se (mediafinal>=6) entao
   Escreval ("Você foi aprovado!")
   senao
   Escreval ("Você foi reprovado!")
   fimse */

alert("Média Final")

let primeiroSemestre = parseFloat(prompt("Digite a nota do Primeiro Semestre: "))
let segundoSemestre = parseFloat(prompt("Digite a nota do Segundo Semestre: "))
let terceiroSemestre = parseFloat(prompt("Digite a nota do Terceiro Semestre: "))

let mediaFinal = (primeiroSemestre * 2 + segundoSemestre * 3 + terceiroSemestre * 5) / 10

alert(`Sua Média Final é: ${mediaFinal}`)

if (mediaFinal >= 6) {
    alert("Você foi aprovado!")
} else {
    alert("Você foi reprovado!")
}