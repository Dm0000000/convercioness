function convertir() {
    const inputTemp = document.getElementById('temperatura');
    const tipo = document.getElementById('tipoConversion').value;
    const resultadoDiv = document.getElementById('resultado');

    if (inputTemp.value.trim() === '') {
        alert('Por favor, ingresa un valor de temperatura.');
        return;
    }

    const valor = parseFloat(inputTemp.value);
    let resultado = 0;
    let deUnidad = '';
    let aUnidad = '';

    if (tipo === 'cToF') {
        resultado = (valor * 9 / 5) + 32;
        deUnidad = '°C';
        aUnidad = '°F';
    } else {
        resultado = (valor - 32) * 5 / 9;
        deUnidad = '°F';
        aUnidad = '°C';
    }

    resultadoDiv.textContent = `${valor} ${deUnidad} = ${resultado.toFixed(2)} ${aUnidad}`;
}