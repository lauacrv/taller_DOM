
    
function calcularPresupuesto() {

    let invitados = Number(document.getElementById("numero-inv").value);
    let comida = Number(document.getElementById("cost-comida").value);
    let bebida = Number(document.getElementById("cost-bebida").value);
    let decoracion = Number(document.getElementById("cost-decor").value);
    let musica = Number(document.getElementById("cost-musica").value);
    let porcentaje = Number(document.getElementById("propina-porc").value);

    let comidaTotal = invitados * comida;
    let bebidaTotal = invitados * bebida;

    let subtotal = comidaTotal + bebidaTotal + decoracion + musica;
    let propina = subtotal * (porcentaje / 100);
    let total = subtotal + propina;

    let costoInvitado = invitados > 0 ? total / invitados : 0;

    document.getElementById("comida-total-s").textContent = comidaTotal.toFixed(0);
    document.getElementById("bebida-total-s").textContent = bebidaTotal.toFixed(0);
    document.getElementById("decoracion").textContent = decoracion.toFixed(0);
    document.getElementById("musica").textContent = musica.toFixed(0);
    document.getElementById("subtotal").textContent = subtotal.toFixed(0);
    document.getElementById("propina").textContent = propina.toFixed(0);
    document.getElementById("total-general").textContent = total.toFixed(0);
    document.getElementById("costo-inv").textContent = costoInvitado.toFixed(0);
}

// Actualizar automáticamente al cambiar cualquier campo
document.querySelectorAll("input").forEach(function(campo) {
    campo.addEventListener("input", calcularPresupuesto);
});



