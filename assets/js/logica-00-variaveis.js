function exemploBasico(){
    alert("Olá mundo");
}

function exemploVariaveis(){
    // Variável que permite armazenar informações

    // Esta variável é do tipo string (permite armazenar texto)
    let estabelecimento = "Shablau"; // string
    let produto = "Burguer Bacon";
    // Esta variável é do tipo int (permite armazenar número inteiro)
    let quantidade = 7;
    // Esta variável é do tipo float (permite armazar número real)
    let preco = 30.91;
    // Calcular o total do pedido (do tipo float)
    let total = quantidade * preco;

    // Alterar o valor da variável
    estabelecimento = "Shablau LTDA";

    // Apresentar a variável no console
    console.log("Estabelecimento: " + estabelecimento);

    alert("Variáveis:\nEstabelecimento: " + estabelecimento + 
        "\nProduto: " + produto + 
        "\nQuantidade: " + quantidade + 
        "\nPreço: R$ " + preco + 
        "\nTotal: R$ " + total 
    );
}

function exemploCalcularIdade(){
    // Preciso armazenar o nome e ano de nascimento
    // Depois calcular a idade
    // Apresentar todas as infos
    let nome = "Judity da Silva"; // string
    let anoNascimento = 1997; // int

    let anoAtual = 2026;

    let idade = anoAtual - anoNascimento;


    alert("Nome: " + nome + "Idade: " + idade);
}

function exemploBoolean(){
    // Armazenar se uma pessoa está empregada ou n
    let nome = "João";
    // Boolean serve para armazenar true (verdadeiro) ou false (falso)
    let empregado = false; // boolean

    // Joãozinho passou em uma entrevista
    empregado = true;

    alert("Nome: " + nome + "\nEmpregado: " + empregado);
}


function calcularAumentoSalario(){
    let salario = 3504.20; // float
    let percentual = 20.42;

    let valorAumento = (salario * percentual) / 100;

    let salarioNovo = salario + valorAumento;

    alert("Valor do aumento: R$ "+ valorAumento + "\nNovo salário: R$ " + salarioNovo);
}

function calcularAumentoSalarioAlternativa(){
    let salario = 3504.20; // float
    let percentual = 20.42 / 100 + 1; // => 1.2042

    let salarioNovo = salario * percentual;

    alert("Novo salário: R$ " + salarioNovo);
}

/*
Ex. 1: Criar uma função exercicio01 com as seguintes variáveis:
nome
sobrenome
cor favorita
ano de nascimento
auxílio educação
joga rpg com valor falso

Alterar a variável de joga rpg para verdadeiro
Alterar a cor favorita para roxo

Apresentar todos os dados

*/