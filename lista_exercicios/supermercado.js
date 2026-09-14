function verPromocao() {
    const produto = document.getElementById("produto").value;
    const preco = parseFloat(document.getElementById("preco").value);

    const terceiro = preco * 0.5;
    const total = preco * 2 + terceiro;

    let resultado = "<b>" + produto + " - Promocao: Leve 3 por R$: " + total.toFixed(2) + "</b><br>";
    resultado = resultado + "<b>O 3 produto custa apenas R$: " + terceiro.toFixed(2) + "</b>";

    document.getElementById("resultado").innerHTML = resultado;
}

