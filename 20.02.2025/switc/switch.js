document.getElementsByTagName("body")[0].style.backgroundColor="aqua";
function giris(){
    var tk=document.getElementById("takim").value;
    switch(tk){
        case"gs":
        document.getElementById("renk1").style.backgroundColor="yellow";
        document.getElementById("renk2").style.backgroundColor="red";
        document.getElementById("logo").innerHTML="<img src='image/gs.png' width='500'height='500'";
        break;
        case"fb":
        document.getElementById("renk1").style.backgroundColor="yellow";
        document.getElementById("renk2").style.backgroundColor="blue";
        document.getElementById("logo").innerHTML="<img src='image/fb.png' width='500'height='500'";
        break;
        case"bjk":
        document.getElementById("renk1").style.backgroundColor="white";
        document.getElementById("renk2").style.backgroundColor="black";
        document.getElementById("logo").innerHTML="<img src='image/bjk.png' width='500'height='500'";
        break;
        case"ts":
        document.getElementById("renk1").style.backgroundColor="darkred";
        document.getElementById("renk2").style.backgroundColor="blue";
        document.getElementById("logo").innerHTML="<img src='image/ts.png' width='500'height='500'";
        
        break;
        case"bs":
        document.getElementById("renk1").style.backgroundColor="white";
        document.getElementById("renk2").style.backgroundColor="green";
        document.getElementById("logo").innerHTML="<img src='image/bs.png' width='500'height='500'";
        break;
    }
}
