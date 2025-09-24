function salvarDados(peso, altura, imc, classificacao, imagem) {
    localStorage.setItem("peso", peso);
    localStorage.setItem("altura", altura);
    localStorage.setItem("imc", imc);
    localStorage.setItem("classificacao", classificacao);
    localStorage.setItem("imagem", imagem);
}

function carregarDados() {
    let peso = localStorage.getItem("peso");
    let altura = localStorage.getItem("altura");
    let imc = localStorage.getItem("imc");
    let classificacao = localStorage.getItem("classificacao");
    let imagem = localStorage.getItem("imagem");

    if (peso) document.getElementById("peso").value = peso;
    if (altura) document.getElementById("altura").value = altura;
    if (imc && classificacao) {
        document.getElementById("resultado").innerText = `${imc} (${classificacao})`;
    }
    if (imagem) {
        document.getElementById("imgImc").src = imagem;
    }
}

function calcular() {

    let peso = parseFloat(document.getElementById("peso").value);

    let altura = parseFloat(document.getElementById("altura").value);

    salvarDados(peso, altura);

    let imc = peso / (altura * altura)

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById("resultado").innerText =
            "Preencha peso e altura";
        return;
    }

    let classificacao = "";
    let imagem = "./imagens/Neutro.png";


    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        imagem = "./imagens/baixo-sobre.png";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
        imagem = "./imagens/Normal.png";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
        imagem = "./imagens/baixo-sobre.png";
    } else if (imc < 34.9) {
        classificacao = "Obesidade 1";
        imagem = "./imagens/besidade1l.png";
    } else if (imc < 39.9) {
        classificacao = "Obesidade 2";
        imagem = "./imagens/Obesidade2.png";
    } else {
        classificacao = "Obesidade 3";
        imagem = "./imagens/besidade3.png";
    }

    document.getElementById("resultado").innerText =
        `${imc.toFixed(2)}(${classificacao})`;
        document.getElementById("imagem-imc").src = imagem;

}
window.onload = carregarDados;


