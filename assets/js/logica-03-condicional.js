function exemplo01() {
    let limpouCasa = prompt("Limpou a casa? [sim/não]");
    
    //se limpou casa sim, vou sair
    if (limpouCasa === "sim") {
        alert("Eu posso sair com meus amigos");
    } else { // se não
        alert("Ficarei em casa, bravo(a)");
    }
}
function exemplo02 () {
    let temperatura = parseInt(prompt("Digite a temperatura"));

    //se a temperatura for maior que 28

    if (temperatura > 28) {
        alert("Está Quente");
    }
    // senão se a temperatura for menor que 6
    
     else if (temperatura < 6 ) {
        alert("Está Frio");
     }
        //senão

     else {
        alert("Está ameno");
    }
}

function exemploTickets() {

    let idade = parseInt(prompt("Digite a idade"));
    let quantidadeIngressos = parseInt(prompt("Digite a quantidade de ingressos"));

    let precoCadaIngresso = 0;

    if (idade <= 10){
        precoCadaIngresso = 15;
    } else if  (idade <= 15) {
        precoCadaIngresso = 20;
    } else if  (idade <= 17) {
        precoCadaIngresso = 22;
    }else if  (idade >= 65){
        precoCadaIngresso = 15;
    }else { 
        precoCadaIngresso = 30;
        
    }
    let total = quantidadeIngressos * precoCadaIngresso;

    alert (
        "RESUMO DA COMPRA DOS INGRESSOS\n\n" +
        "Idade:" + idade + "anos\n" +
        "Quantidade de ingressos: " + quantidadeIngressos + "\n" +
        "Preco de cada ingresso: R$ " + precoCadaIngresso.toFixed(2) + "\n\n" +
        "TOTAL DA COMPRA: R$" + total.toFixed(2)
    );

    }

    
