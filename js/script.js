// Rastgele sayı üreten fonksiyon
// Bu fonksiyon, 1 ile 100 arasında rastgele bir sayı üretir
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // 1 ile 100 arasında sayılar oluştur
}

// 100 adet rastgele sayı içeren bir dizi oluştur
let numbers = [];
// Bu döngü, rastgele sayılar oluşturur ve diziye ekler
for (let i = 0; i < 100; i++) {
    numbers.push(getRandomNumber());
}

// Sayıları büyükten küçüğe sırala
// Bu satır, diziyi büyükten küçüğe sıralar
numbers.sort((a, b) => b - a);

// Sayıları HTML'deki <div> elemanına yatay şekilde yazdır
// HTML belgesindeki 'sortedNumbers' id'sine sahip <div> elemanını seçer
const sortedNumbersDiv = document.getElementById('sortedNumbers');
// Diziyi metin haline getirir ve <div> elemanına yazdırır
sortedNumbersDiv.textContent = numbers.join(', ');

// Küçükten büyüğe sıralama butonuna tıklama olayı ekle
document.getElementById('sortAsc').addEventListener('click', () => {
    // Diziyi küçükten büyüğe sırala
    numbers.sort((a, b) => a - b);
    // Diziyi <div> elemanına yazdır
    sortedNumbersDiv.textContent = numbers.join(', ');
});

// Büyükten küçüğe sıralama butonuna tıklama olayı ekle
document.getElementById('sortDesc').addEventListener('click', () => {
    // Diziyi büyükten küçüğe sırala
    numbers.sort((a, b) => b - a);
    // Diziyi <div> elemanına yazdır
    sortedNumbersDiv.textContent = numbers.join(', ');
});
