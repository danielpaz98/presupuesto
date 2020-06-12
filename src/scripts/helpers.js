export function validarCantidad(cantidad) {
    let validacion = {};
    if (parseInt(cantidad) < 0) {
        validacion = { tipo: { invalid: true }, mensaje: "La cantidad no puede ser negativa" };
    } else if (parseInt(cantidad) === 0) {
        validacion = {
            tipo: { invalid: true },
            mensaje: "La cantidad no puede ser igual a cero",
        };
    } else if (parseInt(cantidad) > 0) {
        validacion = { tipo: { valid: true }, mensaje: "" };
    }
    return validacion;
}

export function colorAlertaRestante(presupuesto, restante) {
    let color = "success";
    if (restante === 0) {
        color = "secondary";
    } else if (restante < presupuesto * 0.25) {
        color = "danger";
    } else if (restante <= presupuesto * 0.8) {
        color = "warning";
    }
    return color;
}
