function converterParaInt(){
    // Converter uma string para inteiro
    let numero = parseInt("32");

    let valor = numero * 2;
    
    alert("Número: " + numero + "\nNúmero * 2: " + valor);
}

function converterParaFloat(){
    // Converter uma string para float
    let numero1 = parseFloat("32.01");
    let numero2 = parseFloat("0.01");

    let total = numero1 + numero2;
    alert(
        "Número 01: " + numero1 + 
        "\nNúmero 02: " + numero2 + 
        "\nTotal: " + total 
    )
    // Como apresentar somente duas casas decimais
}

/*

Exercicio 01 (tudo deve ser convertido quando for int e float):

Nome
Quantidade de horas trabalhadas (inteiro)
Valor hora (real)
Auxílio creche (real)
Desconto passe (real)
Auxílio educação (real)

Calcular o total e apresentar todos os dados


*/