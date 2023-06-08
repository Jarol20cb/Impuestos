function calcularImpuestos() {
    var monto = parseFloat(document.getElementById("monto").value);
    var adValorem = parseFloat(document.getElementById("ad-valorem").value) / 100;
    var impuestoConsumo = parseFloat(document.getElementById("impuesto-consumo").value) / 100;
    var iva = parseFloat(document.getElementById("iva").value) / 100;
    var impuestoMunicipal = parseFloat(document.getElementById("impuesto-municipal").value) / 100;
    var seguro = parseFloat(document.getElementById("seguro").value) / 100;

    var adValoremTotal = monto * adValorem;
    var impuestoConsumoTotal = monto * impuestoConsumo;
    var ivaTotal = (monto + adValoremTotal + impuestoConsumoTotal) * iva;
    var impuestoMunicipalTotal = monto * impuestoMunicipal;
    var seguroTotal = monto * seguro;

    var totalImpuestos = adValoremTotal + impuestoConsumoTotal + ivaTotal + impuestoMunicipalTotal + seguroTotal;
    var precioTotal = monto + totalImpuestos;

    document.getElementById("ad-valorem-calc").innerHTML = "Ad / Valorem: " + adValoremTotal.toFixed(2) + " - Es calculado multiplicando el monto por el porcentaje del impuesto.";
    document.getElementById("impuesto-consumo-calc").innerHTML = "Impuesto Selectivo al Consumo: " + impuestoConsumoTotal.toFixed(2) + " - Es calculado multiplicando el monto por el porcentaje del impuesto.";
    document.getElementById("iva-calc").innerHTML = "Impuesto General a las Ventas: " + ivaTotal.toFixed(2) + " - Es calculado sumando el monto, Ad / Valorem y el Impuesto Selectivo al Consumo, y luego multiplicando por el porcentaje del impuesto.";
    document.getElementById("impuesto-municipal-calc").innerHTML = "Impuesto de Promoción Municipal: " + impuestoMunicipalTotal.toFixed(2) + " - Es calculado multiplicando el monto por el porcentaje del impuesto.";
    document.getElementById("seguro-calc").innerHTML = "Seguro: " + seguroTotal.toFixed(2) + " - Es calculado multiplicando el monto por el porcentaje del seguro.";
    document.getElementById("total-impuestos").innerHTML = "Total de impuestos: " + totalImpuestos.toFixed(2);
    document.getElementById("precio-total").innerHTML = "Precio total: " + precioTotal.toFixed(2);
}
