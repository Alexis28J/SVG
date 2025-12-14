//Un'immagine SVG ci permette di modificarla riscrivendo il suo codice html --  vedi l'immagine (visualizza su text editor)
//fill = 'yellow' - ho colorato l'immagine di giallo


//TASK
//1) Creare un'icona hamburguer menu icon ('tre lineette') dentro di un botone
//che cambi di colore al passaggio del mouse e di posizione a verticale con un click


function rotation(){   //funzione per ruotare l'icona hamburguer al click
    const hamb = document.getElementById('hamburguer'); //l'id 'hamburguer' è associato al svg
    console.log(hamb);
    hamb.classList.toggle('active');  //aggiungo/rimuovo la classe 'active' al click
}


function changeImageColor(image){      //cambiare il colore dell'immagine svg al passaggio del mouse

    // non riesco a cambiare il colore con fill perchè l'immagine è composta da più linee cioè più elementi svg
    // quindi uso il filtro CSS per cambiare il colore dell'intera immagine svg

    //image.style.filter = 'red(100%)';  //non cambia il colore perchè il filtro red(100%) non è supportato da tutti i browser
    //image è l'elemento svg passato come parametro
    //style è un attributo che permette di modificare lo stile di un elemento html
    //filter è una proprietà CSS che permette di applicare effetti grafici come il cambio di colore
    //nel filtro uso red(100%) per rendere l'immagine rossa al 100% ma posso usare anche altri colori come blue(100%) o green(100%)

    //ma purtroppo firefox non supporta il filtro red(100%) quindi uso un filtro alternativo
    image.style.filter = 'invert(27%) sepia(96%) saturate(7493%) hue-rotate(357deg) brightness(103%) contrast(107%)'; //filtro per rendere l'immagine rossa
    //questo filtro è stato generato usando un tool online (https://codepen.io/sosuke/pen/Pjoqqp) che converte un colore esadecimale in un filtro CSS
    
    console.log("Mouse sull'immagine");
}

function returnToOriginalColor(image) {    //Ripristina il filtro originale quando il mouse esce dall'immagine
    image.style.filter = 'none';
    console.log("Mouse fuori dall'immagine");
}


//2) P5.js
/// usare p5js per creare un community module da inviare al concorso per la mostra
/// (https://pcdcoimbra.dei.uc.pt/2026/)




