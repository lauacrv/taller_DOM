function calcular(){
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    let promedio = (nota1 + nota2 + nota3) / 3;
    document.getElementById("promedio").value = promedio.toFixed(1);

    if(nota1 <0 || nota1>5){
        alert("Nota 1 invalida.");
        return;
    }
    if(nota2 <0 || nota2>5){
        alert("Nota 2 invalida.");
        return;
    }
    if(nota3 <0 || nota3>5){
        alert("Nota 3 invalida.");
        return;
    }
    if(promedio < 3){
        alert("Perdio.");
        return;
    }
}
