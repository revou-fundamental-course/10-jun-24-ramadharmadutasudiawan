// Mengambil elemen dari DOM
const celciusTextarea = document.getElementById('celcius');
const fahrenheitTextarea = document.getElementById('fahrenheit');
const calculateTextarea = document.getElementById('calculate');
const convertButton = document.getElementById('convert');
const resetButton = document.getElementById('reset');
const reverseButton = document.getElementById('reverse');

// Fungsi untuk mengonversi dari Celcius ke Fahrenheit
function celciusToFahrenheit(celcius) {
    return (celcius * 9/5) + 32;
}

// Fungsi untuk mengonversi dari Fahrenheit ke Celcius
function fahrenheitToCelcius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Fungsi untuk mengonversi suhu dan menampilkan penjabaran rumus
convertButton.addEventListener('click', () => {
    const celciusValue = parseFloat(celciusTextarea.value);
    const fahrenheitValue = parseFloat(fahrenheitTextarea.value);
    let calculationDetail = '';

    if (!isNaN(celciusValue) && celciusTextarea.value.trim() !== "") {
        const result = celciusToFahrenheit(celciusValue).toFixed(2);
        fahrenheitTextarea.value = result;
        calculationDetail = `${celciusValue}°C = (${celciusValue} * 9/5) + 32 = ${result}°F`;
    } else if (!isNaN(fahrenheitValue) && fahrenheitTextarea.value.trim() !== "") {
        const result = fahrenheitToCelcius(fahrenheitValue).toFixed(2);
        celciusTextarea.value = result;
        calculationDetail = `${fahrenheitValue}°F = (${fahrenheitValue} - 32) * 5/9 = ${result}°C`;
    } else {
        alert("Please enter a valid number in one of the fields.");
    }

    calculateTextarea.value = calculationDetail;
});

// Fungsi untuk mereset kedua textarea dan kolom kalkulator saat tombol Reset diklik
resetButton.addEventListener('click', () => {
    celciusTextarea.value = '';
    fahrenheitTextarea.value = '';
    calculateTextarea.value = '';
});

// Fungsi untuk membalikkan nilai dalam kedua textarea saat tombol Reverse diklik
reverseButton.addEventListener('click', () => {
    const celciusValue = celciusTextarea.value;
    const fahrenheitValue = fahrenheitTextarea.value;

    celciusTextarea.value = fahrenheitValue;
    fahrenheitTextarea.value = celciusValue;
});