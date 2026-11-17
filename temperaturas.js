let cInput = document.getElementById("celsius");
let fInput = document.getElementById("fahrenheit");
let boton = document.getElementById("btn");
let textoResultado = document.getElementById("resultado");

boton.addEventListener("click", function() {
    let c = cInput.value;
    let f = fInput.value;

    if (c === "" && f === "") {
        alert("Escribe una temperatura por favor");
        return;
    }

    if (c !== "") {
        let celsius = parseFloat(c);
        let resultadoF = (celsius * 9 / 5) + 32;
        fInput.value = resultadoF.toFixed(2);
        textoResultado.textContent = celsius + " °C son " + resultadoF.toFixed(2) + " °F";
    } 
    else if (f !== "") {
        let fahrenheit = parseFloat(f);
        let resultadoC = (fahrenheit - 32) * 5 / 9;
        cInput.value = resultadoC.toFixed(2);
        textoResultado.textContent = fahrenheit + " °F son " + resultadoC.toFixed(2) + " °C";
    }
});
