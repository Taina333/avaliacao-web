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