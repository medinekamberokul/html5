function hesap(){
    var adi,n1,n2,n3,ort,gen;
    adi=document.getElementById("adi").value;
    n1=Number(document.getElementById("not1").value);
    n2=Number(document.getElementById("not2").value);
    n3=Number(document.getElementById("not3").value);
    ort=(n1+n2+n3)/3.0;
    gen=ort*4;
    if(ort<50){
        document.getElementById("konum").innerHTML="sayın : "+ adi +" notunuz : "+ ort +" <div class='notbaremi' style='background-color:red;width :"+gen+"px;'></div";
    }
    else{
        document.getElementById("konum").innerHTML="sayın : "+ adi +" notunuz : "+ ort +" <div class='notbaremi' style='background-color:green;width :"+gen+"px;'></div";
    }
}