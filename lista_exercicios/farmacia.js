function mostrarPromocao() {
    const medicamento = document.getElementById("medicamento").value;
    const preco = parseFloat(document.getElementById("preco").value);

    const total = preco * 2;
    const centavos = total - Math.floor(total);
    const valorPromocao = total - centavos;

    let resultado = "<b>Promocao de " + medicamento + "</b><br>";
    resultado = resultado + "<b>Leve 2 por apenas R$: " + valorPromocao.toFixed(2) + "</b>";

    document.getElementById("resultado").innerHTML = resultado;
}