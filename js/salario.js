function calcular(){
    let horas = parseInt(document.getElementById("horas").value);
    let valor = parseInt(document.getElementById("valor").value);
    let resultado = horas * valor;  

    if(horas <=0 || valor <=0){
        alert("Datos incorrectos.");
        return;
    }

    document.getElementById("resultado").value = resultado.toLocaleString('es-CO');

}