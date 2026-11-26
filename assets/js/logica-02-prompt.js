function solicitarDadosBrinquedo() {
    let brinquedo = prompt("Digite o nome do brinquedo :");
    let descricao = prompt("Digite a descrição");

    alert(brinquedo + ":" + descricao);
}

function solicitarDadosTickets() {
    let atracao1 = prompt("Digite o nome da atração do ticket 1:");
    let personagem1 = prompt("Digite o nome do personagem principal da atração 1:");
    let diretor1 = prompt("Digite o nome do diretor da atração 1:");

    let atracao2 = prompt("Digite o nome da atração do ticket 2:");
    let personagem2 = prompt("Digite o nome do personagem principal da atração 2:");
    let diretor2 = prompt("Digite o nome do diretor da atração 2:");

    alert("Ticket 1: " + atracao1 + 
    "\nPersonagem: " + personagem1 + 
    "\nDiretor: " + diretor1 +
    "\n\nTicket 2: " + atracao2 +
    "\nPersonagem: " + personagem2 +
    "\nDiretor: " + diretor2);
}

function solicitarDadosApartamento(){
    let endereco = prompt("Digite o endereço do apartamento");
    let metrosQuadrados = parseInt(prompt ("Digite a quantidade de metros²"));

    alert("Apartamento:\n" + endereco + "\nMetros²" + metrosQuadrados);
}

function solicitarNumerosSomar(){
    let numero1 = parseInt(prompt("Digite um número"));
    let numero2 = parseInt(prompt("Digite outro número"));

    let soma = numero1 + numero2;

    alert( 
        "Número 1:" + numero1 +
        "Número 2" + numero2 +
        "Soma:" + soma    
    );
}

function exemploMercadinho() {

    let produto1 = prompt("Digite o nome do produto 1");
    let quantidadeProduto1 = parseInt(prompt("Digite a quantidade do produto 1"));
    let precoProduto1 = parseFloat(prompt("Digite o preço do produto 1"));

    let produto2 = prompt("Digite o nome do produto 2");
    let quantidadeProduto2 = parseInt(prompt("Digite a quantidade do produto 2"));
    let precoProduto2 = parseFloat(prompt("Digite o preço do produto 2"));

    let totalProduto1 = quantidadeProduto1 * precoProduto1;
    let totalProduto2 = quantidadeProduto2 * precoProduto2;

   let totalPedido = totalProduto1 + totalProduto2;

   alert( "RESUMO DA COMPRA\n\n" +
    "Produto 1: " + produto1 + "\n" +
    "Quantidade: " + quantidadeProduto1 + "\n" +
    "Preço unitário: R$ " + precoProduto1.tofixed(2) + "\n" +
    "Total: R$ " + totalProduto.tofixed(2) + "\n\n" +

    "Produto 2: " + produto2 + "\n" +
    "Quantidade: " + quantidadeProduto1 + "\n" +
    "Preço unitário: R$ " + precoProduto1.tofixed(2) + "\n" +
    "Total: R$ " + totalProduto.tofixed(2) + "\n\n" +

    "TOTAL DA COMPRA: R$ " + totalPedido.tofixed(2)
    );

}