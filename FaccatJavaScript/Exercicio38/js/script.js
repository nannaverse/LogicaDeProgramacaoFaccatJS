/*  Escreval ("Digite o código para acessar a sua conta: ")
   Leia (codigo)

   Se (codigo = 1234) entao
      Escreval ("Digite a sua senha de acesso: ")
      Leia (senha)
      Se (senha = 9999) entao
         Escreval ("Acesso permitido!")
      Senao
         Escreval ("Senha incorreta")
      Fimse
   Senao
      Escreval ("Usuário inválido!")
   Fimse
 */

alert("Código de Usuário")

let codigo = parseInt(prompt("Digite o código para acessar a sua conta: "))
let senha

if (codigo === 1234) {
    senha = parseInt(prompt("Digite a sua senha de acesso: "))

    if (senha === 9999) {
        alert("Acesso permitido")
    } else {
        alert("Senha Incorreta")
    }
} else {
    alert("Usuário Inválido!")
}
