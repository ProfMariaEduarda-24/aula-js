function positivonegativonumero () {

    let positivonegativonumero = parseInt(prompt("Digite um número"));

    if (positivonegativonumero > 0) {
        alert("Número Positivo");
    } else if ( positivonegativonumero < 0) {
        alert("Número Negativo");
    } else {
        alert("O número é zero");
    }
}

function maioridade () {

    let maioridade = parseInt(prompt("Digite uma idade"));

    if (maioridade >= 18) {
        alert("Maior de Idade");
    } else if ( maioridade < 18) {
        alert("Menor de Idade");
    } 
}
function verificarSenha() {

    let senha = prompt("Digite sua senha");

    let senhaCorreta = "1234";

    if (senha === senhaCorreta) {
        alert("Acesso permitido");

    } else {
        alert("Senha incorreta");
    }

}


function promocaoLoja() {

    let valorCompra = parseFloat(prompt("Digite o valor total da compra"));

    if (valorCompra >= 100) {

        let desconto = valorCompra * 0.10;
        let valorFinal = valorCompra - desconto;

        alert("Você ganhou 10% de desconto!\n" +
              "Valor da compra: R$ " + valorCompra.toFixed(2) + "\n" +
              "Desconto: R$ " + desconto.toFixed(2) + "\n" +
              "Valor final: R$ " + valorFinal.toFixed(2));

    } else {

        alert("Você não ganhou desconto.\n" +
              "Valor final: R$ " + valorCompra.toFixed(2));

    }
}




/*
OPERADORES RELACIONAIS

IGUALDADE        ===
MAIOR             >
MAIOR OU IGUAL    >=
MENOR             <
MENOR OU IGUAL    <=
INDIFERENTE       !==
*/


