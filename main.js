function tocaSom (idelementoAudio){
    document.querySelector(idelementoAudio ).play();
}

const listadeTeclas= document.querySelectorAll(".tecla");

let contador= 0;

//enquanto
while(contador < listadeTeclas.length){
    
    listadeTeclas [0 ].onclick = function (){
        tocaSom("#");
    }
    
    contador = contador + 1;
    
    console.log(contador)
    
}
