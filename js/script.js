
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. 
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.



// bersagliamo lo slider
// tramite un ciclo for prendiamo ogni indirizzo delle immagini dall'array
// per ognuno di essi andremo a creare un elemento img dentro lo slider

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
console.log(images);


// bersagliamo lo slider
const sliderElement = document.getElementById("slider");

const thumbElement = document.querySelector("#thumbnails");


// tramite un ciclo for prendiamo ogni indirizzo delle immagini dall'array
// tramite un ciclo for prendiamo ogni indirizzo delle immagini dall'array
images.forEach(function(currentImage, index) {

    sliderElement.innerHTML += `
                    <section class="slide">
                        <img src="./${currentImage.image}" alt="anteprima ${index + 1}">
                        <div class="details mb-1">

                            <h3 class="title">
                                ${currentImage.title}
                            </h3>
                            <div class="text">
                               <small>${currentImage.text}</small>
                            </div>
                        </div>
                    </section>`


    
    thumbElement.innerHTML += `<div class="img-thumb">
                                    <img src="./${currentImage.image}".webp alt="anteprima ${index + 1}">
                                </div>`


});


document.querySelector(".slide:nth-of-type(1)").classList.add("active");


// -  salvo un contatore della slide
// -  QUANDO premo la freccia SU
//     - prendo l'immagine attuale e le rimuovo la classe "active"  
//     - aumento il contatore di 1
//     - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"



// -  salvo un contatore della slide
let slideNumber = 1;

// -  QUANDO premo la freccia SU
document.querySelector("#right-arrow").addEventListener("click", function() {


    if (slideNumber < images.length) {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.remove("active");

        // - aumento il contatore di 1
        slideNumber++;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.add("active");

        console.log(slideNumber);

    } else {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.remove("active");

        // resetto la variabile che mi conta l'immagine a cui sono arrivato
        slideNumber = 1;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.add("active");

    }

        
});


document.querySelector("#left-arrow").addEventListener("click", function() {


    if (slideNumber < images.length) {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.remove("active");

        // - aumento il contatore di 1
        slideNumber++;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.add("active");

        console.log(slideNumber);

    } else {

        // - prendo l'immagine attuale e le rimuovo la classe "active"  
        document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.remove("active");

        // resetto la variabile che mi conta l'immagine a cui sono arrivato
        slideNumber = 1;

        // - prendo l'immagine con il nuovo contatore e le aggiungo la classe "active"
        document.querySelector(`.slide:nth-of-type(${slideNumber})`).classList.add("active");

    }

        
});


// gestione click thumbnails
// fare in modo che tutte le nostre thumbnails abbiano un addEventListener e cliccando si visualizza

const thumbnailsElement = document.querySelectorAll("#thumbnails .img-thumb");

thumbnailsElement.forEach(((currentThumb, index) => {
    currentThumb.addEventListener("click", function() {
        
        
        // rimuovere la classe active dalla slide precedente
        document.querySelector(`#slider .slide:nth-of-type(${slideNumber})`).classList.remove("active");
        // aggiorno il numero 
        slideNumber = index + 1
        
        // aggiungo la classe active solo all'anteprima cliccata
        
        
        // quando clicco su un anteprima quella slide deve avere la classe active
        // tramite index so quale slide sono
        document.querySelector(`#slider .slide:nth-of-type(${index + 1})`).classList.add("active");
        currentThumb.classList.add("active")
        
        
        
        
    })
}))