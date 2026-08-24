function calcularValor() {
    const valor15 = parseFloat(document.getElementById("valor15").value);
    const tempo = parseFloat(document.getElementById("tempo").value);

    const fracoes = Math.ceil(tempo / 15);
    const valorPagar = fracoes * valor15;

    const resultado = "<b>Valor a Pagar R$: " + valorPagar.toFixed(2) + "</b>";

    document.getElementById("resultado").innerHTML = resultado;
}

