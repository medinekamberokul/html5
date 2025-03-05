function renkDegistir()
{
var renkler=["red","green","blue","yellow","orange","pink","gray","white"];
var rastgele;
var i;
for(i=0; i<8; i++){

    rastgele=Math.floor(Math.random()*8);
    document.getElementsByTagName("div")[i].style.backgroundColor=renkler[rastgele];
} 



}