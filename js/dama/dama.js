function satranc(){
    var i,j;
        for(i=0;i<8;i++){ // burada satırları kontrol ediyoruz.

            for(j=0;j<8;j++){ //burada sutunları kontrol ediyoruz.

               if((j+i)%2==0){
                    document.getElementById("tahtaCerceve").innerHTML+="<div class='kareBeyaz'></div>";  }
               else{
                    document.getElementById("tahtaCerceve").innerHTML+="<div class='kareSiyah'> </div>"; }
                    }
        }
    }