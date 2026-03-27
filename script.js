document.getElementById("calcular").addEventListener("click", function(){
    let salario = Number(document.getElementById("salario").value);
    let produto = Number(document.getElementById("Produto").value);
    let product = document.getElementById("product").value;


    let salario_dia = salario / 30;
    let salario_hora = salario_dia / 8;

    let horas = produto / salario_hora;
    let dias = horas / 8;

    document.getElementById("resultado").innerText = 
    `Você precisa trabalhar ${Math.ceil(dias)} dias para comprar esse ${(product)}`;
})


