const book$$ = document.querySelector(".book");
const formulario$$ = document.querySelector(".formulario");
const input$$ = document.querySelector("input");

const buscar = (event) => {
    event.preventDefault();
   console.log(input$$.value);
    
    console.log('buscar', event.target);
}


const pers = (characters) => {
    console.log("MIS PERSONAJES",characters);
    for (const character of characters) {
       
        //ELEMENTOS//
        const character$$ = document.createElement("div");
        const names$$ = document.createElement("h3");
        const image$$ = document.createElement("img");
        const species$$ = document.createElement("p");



       //CLASES//

        character$$.classList.add("character");
        names$$.classList.add("name");
        image$$.classList.add("image");
        species$$.classList.add("species");
       
        //CONTENIDO ELEMENTOS
        
        names$$.textContent = character.name;
        image$$.style.backgroundImage = `url(${character.image})`;
        species$$.textContent = character.species;
       
       
        //INSERTO ELEMENTOS//
        character$$.appendChild(names$$);
        character$$.appendChild(species$$);
        character$$.appendChild(image$$);
        book$$.appendChild(character$$);
        
        
    }
}


fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,7,8,9,10,11,12,13,14,15,16,17,18,21,22,23").then((response) => response.json()).then((characters)=>
pers(characters));

formulario$$.addEventListener("submit", buscar);