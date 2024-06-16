//script

document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm

function tempConvert() {
    var fahreinheit = document.getElementById(fahreinheit).value
    var celcius = document.getElementById(celcius).value

    if (fahreinheit != '') {
        celcius = (parseFloat(fahreinheit) -32) /1.8;
    } else{
        fahreinheit = (parseFloat(celcius) * 1.8) + 32;
    }

    document.getElementById('fahrenheit').value = parseFloat(fahreinheit).toFixed(1);
    document.getElementById('celcius').value = parseFloat(celcius).toFixed(1);
}

function clearForm() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celcius').value = '';
}