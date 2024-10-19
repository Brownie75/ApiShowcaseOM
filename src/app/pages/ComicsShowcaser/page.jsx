'use client'
import { useState } from "react"

export default function MarvelShowcaser(){
    
    const [hero, setHero] = useState();

    const [nombre, setNombre] = useState("");

    function handleNombre(e){
        setNombre(e.target.value);
    }
    
    async function getHero(){

        console.log(nombre)

        const hero = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=
            ${nombre.trim().replace(" ","%20")}&apikey=29c21d8b9e8fcc80d178b73573c320128a38c3d5`)
            .then(response => response.json()).then(data => data.results.id)

        console.log(hero);

        const results = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${hero}?apikey=29c21d8b9e8fcc80d178b73573c320128a38c3d5`)
        .then(response => response.json()).then(data => data.results)

        console.log(results)
    }
    
    return(
        <>
            <input placeholder="Nombre" value={nombre} onChange={(e) => handleNombre(e)}></input>
            <button onClick={() => getHero()}>Generate information</button>
        </>
    )

}