function tocaSom (idelementoAudio){
    document.querySelector(idelementoAudio ).play();
}

const listadeTeclas= document.querySelectorAll(".tecla");

let contador= 0;

//enquanto
while(contador < listadeTeclas.length){

    const tecla = listadeTeclas[contador];
    const intrumento = tecla.classList[1]
     
   const 
    
    listadeTeclas [contador ].onclick = function (){
        tocaSom("#som_tecla_pom");
    }
    
    contador = contador + 1;
    
    console.log(contador)
    
}
