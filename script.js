function dividir(){
    var numero1 = parseInt(document.getElementById("num1").value);
    var numero2 = parseInt(document.getElementById("num2").value);
    var resultado 
    if (numero2 === 0){
        resultado = "O divisor não pode ser substituido por 0";
    }else{ 
        resultado = "Resultado: " + (numero1 / numero2);
    }
    alert(resultado);
}

function notas(){
    var nota1 = parseInt(document.getElementById("num3").value);
    var nota2 = parseInt(document.getElementById("num4").value);
    var nota3 = parseInt(document.getElementById("num5").value);
    var nota4 = parseInt(document.getElementById("num6").value);
    var resultado = nota1 + nota2 + nota3 + nota4
    var resultado2 = resultado / 4
    var resultado3
    if (resultado2 < 6){
        resultado3 = "Aluno retido = " + resultado2;
    }else{
        resultado3 = "Aluno aprovado  = " + resultado2;
    }
    alert(resultado3);
}

function valores(){
    var a = parseInt(document.getElementById("num7").value);
    var b = parseInt(document.getElementById("num8").value);
    var c = parseInt(document.getElementById("num9").value);
    var ab = a + b
    var resultado
    if (ab < c){
        resultado = "A soma de A + B = " +ab+ ", sendo MENOR que C = " +c;
    }else{
        resultado = "A soma de A + B = " +ab+ ", sendo MAIOR que C = " +c;
    }
    alert(resultado)
}
    
function area(){
    var base = parseInt(document.getElementById("num10").value);
    var altura = parseInt(document.getElementById("num11").value);
    var area = base * altura
    var area2 = area / 2
    resultado = "Área do trinângulo é "+area2
    alert(resultado)
}

function salario(){
    var salario = document.getElementById("num12").value;
    var taxa = document.getElementById("num13").value;
    var atual = salario + (salario *(taxa / 100))
    resultado = "Salário atual "+atual
    alert(resultado)
}