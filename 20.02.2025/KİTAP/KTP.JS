function kontrol(){
    var netsayisi=document.getElementById.apply("netler").value;
    if(netsayisi<0){
        document.getElementById("ekran").innerText="geçersiz sayı!";
    }
    else if(netsayisi<10){
        document.getElementById("ekran").innerText="net sayınız ortalamanın altında";
    }
    else if(netsayisi<25){
        document.getElementById("ekran").innerText="net sayınız ortalamaya yakın";
    }
    else if(netsayisi<=40){
        document.getElementById("ekran").innerText="net sayınız ortalamanın üstünde";
    }
    else{
        document.getElementById("ekran").innerText="geçersiz sayı!";
    }
}