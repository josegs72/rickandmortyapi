const book$$ = document.querySelector(".book");
const pers = (characters) => {
    console.log("MIS PERSONAJES",characters);
    for (const character of characters) {
        //ELEMENTOS//
        const character$$ = document.createElement("div");
        const names$$ = document.createElement("h3");
        const image$$ = document.createElement("img");
       //CLASES//

        character$$.classList.add("character");
        names$$.classList.add("name");
        image$$.classList.add("image");
       
        //CONTENIDO ELEMENTOS
        
        names$$.textContent = character.name;
        image$$.style.backgroundImage = `url(${character.image})`;
       
       
        //INSERTO ELEMENTOS//
        character$$.appendChild(names$$);
        character$$.appendChild(image$$);
        book$$.appendChild(character$$);
    }
}

fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,7,8,9,10,11,12,13,14,15").then((response) => response.json()).then((characters)=>
pers(characters));
