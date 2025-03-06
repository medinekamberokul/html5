document.getElementById("buton").style.display="none";
function Baslat(){
document.getElementById("kart1").style.backgroundColor="aqua";
document.getElementById("kart2").style.backgroundColor="aqua";
document.getElementById("kart3").style.backgroundColor="aqua";
document.getElementById("kart4").style.backgroundColor="aqua";
document.getElementById("kart5").style.backgroundColor="aqua";
document.getElementById("kart6").style.backgroundColor="aqua";
document.getElementById("sonuc").style.İnnerHTML="";
document.getElementById("sonuc").style.backgroundColor="white";
document.getElementById("buton").style.display="none";    
}
function oyun(a){
    var rs=Math.floor(Math.random()*5+1);
    if(a==rs){
document.getElementById("sonuc").innerHTML="TEBRİKLER BİLDİNİZ";
document.getElementById("sonuc").style.backgroundColor="lightgreen";
document.getElementById("sonuc").style.color="white";

    }
    else{
        document.getElementById("sonuc").innerHTML="HATALI GİRİŞ";
        document.getElementById("sonuc").style.backgroundColor="red";
        document.getElementById("sonuc").style.color="black";

    }
    if(rs==1){
        document.getElementById("kart1").style.backgroundColor="green";
        document.getElementById("kart2").style.backgroundColor="red";
        document.getElementById("kart3").style.backgroundColor="red";
        document.getElementById("kart4").style.backgroundColor="red";
        document.getElementById("kart5").style.backgroundColor="red";
        document.getElementById("kart6").style.backgroundColor="red";
    }
    else if(rs==2){
        document.getElementById("kart1").style.backgroundColor="red";
        document.getElementById("kart2").style.backgroundColor="green";
        document.getElementById("kart3").style.backgroundColor="red";
        document.getElementById("kart4").style.backgroundColor="red";
        document.getElementById("kart5").style.backgroundColor="red";
        document.getElementById("kart6").style.backgroundColor="red";
    }
    else if(rs==3){
        document.getElementById("kart1").style.backgroundColor="red";
        document.getElementById("kart2").style.backgroundColor="red";
        document.getElementById("kart3").style.backgroundColor="green";
        document.getElementById("kart4").style.backgroundColor="red";
        document.getElementById("kart5").style.backgroundColor="red";
        document.getElementById("kart6").style.backgroundColor="red";
    }
    else if(rs==4){
        document.getElementById("kart1").style.backgroundColor="red";
        document.getElementById("kart2").style.backgroundColor="red";
        document.getElementById("kart3").style.backgroundColor="red";
        document.getElementById("kart4").style.backgroundColor="green";
        document.getElementById("kart5").style.backgroundColor="red";
        document.getElementById("kart6").style.backgroundColor="red";
    }
    else if(rs==5){
        document.getElementById("kart1").style.backgroundColor="red";
        document.getElementById("kart2").style.backgroundColor="red";
        document.getElementById("kart3").style.backgroundColor="red";
        document.getElementById("kart4").style.backgroundColor="red";
        document.getElementById("kart5").style.backgroundColor="green";
        document.getElementById("kart6").style.backgroundColor="red";
    }
    else{
        document.getElementById("kart1").style.backgroundColor="red";
        document.getElementById("kart2").style.backgroundColor="red";
        document.getElementById("kart3").style.backgroundColor="red";
        document.getElementById("kart4").style.backgroundColor="red";
        document.getElementById("kart5").style.backgroundColor="red";
        document.getElementById("kart6").style.backgroundColor="green";
    }
    document.getElementById("buton").style.display="block";
}