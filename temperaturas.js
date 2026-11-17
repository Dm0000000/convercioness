let selectTipo = document.getElementById("tipoConversion");
let tempInput = document.getElementById("temperatura");
let boton = document.getElementById("btnConvertir");
let textoResultado = document.getElementById("resultado");

boton.addEventListener("click", function() {
    let valor = tempInput.value;
    let tipo = selectTipo.value;

    if (valor === "") {
        alert("Escribe una temperatura por favor");
        return;
    }

    let grados = parseFloat(valor);

    if (tipo === "c-a-f") {
        let resultadoF = (grados * 9 / 5) + 32;
        textoResultado.textContent = grados + " °C equivalen a " + resultadoF.toFixed(2) + " °F";
    } 
    else if (tipo === "f-a-c") {
        let resultadoC = (grados - 32) * 5 / 9;
        textoResultado.textContent = grados + " °F equivalen a " + resultadoC.toFixed(2) + " °C";
    }
});
