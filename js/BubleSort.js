var array = [];
function SayilariUret(){
    
    for (var i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * 100+ 1));
        
    }
    document.getElementById("yazi").innerText+=array;

}

function SayilariSirala() {
    // Bubble Sort algoritması
 
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10 - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    document.getElementById("Sonuc").innerText = array;
}

    
   



