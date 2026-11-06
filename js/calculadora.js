function sumar() {
    //let = declarar una varible
    //parseInt = indica que es una variable numerica entera 
    //document . indica que lo busca en el HTML
    //("num1") es el id que tiene la etiqueta input en el HTML
    //.value = para guardar lo que se escriba dentro de la etiqueta
    let varn1=parseInt(document.getElementById("num1").value);
    let varn2=parseInt(document.getElementById("num2").value);

    let suma=varn1+varn2;
    document.getElementById("resultado1").value=suma;
}
function restar() {
    let varn1=parseInt(document.getElementById("num1").value);
    let varn2=parseInt(document.getElementById("num2").value);

    let resta=varn1-varn2;
    document.getElementById("resultado1").value=resta;
}
function multi() {
    let varn1=parseInt(document.getElementById("num1").value);
    let varn2=parseInt(document.getElementById("num2").value);

    let multiplicacion=varn1*varn2;
    document.getElementById("resultado1").value=multiplicacion;
}

function divi() {
    let varn1=parseInt(document.getElementById("num1").value);
    let varn2=parseInt(document.getElementById("num2").value);

    if (varn2 === 0) {
        alert("No se puede dividir por cero.");
        return; //finaliza el codigo para no mostrar resultado
    }
    
    let division=varn1/varn2;
    document.getElementById("resultado1").value=division;
}