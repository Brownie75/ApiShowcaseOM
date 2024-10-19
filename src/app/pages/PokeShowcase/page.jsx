'use client'

import { useRouter } from "next/navigation"
import styles from "./page.module.css"
import { useState } from "react";

export default function PokeShowcase(){

    const router = useRouter();

    const [value, setValue] = useState("")

    const [poke, setPoke] = useState({
        name: "",
        id: "",
        pokedex_entry: "",
        movements: [],
        img: ""
    })

    function handleValue(e){
        setValue(e.target.value)
    }

    async function getPoke(){
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${(value.toLowerCase())}`)
        .then(response => response.json())
        const pokedex = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${value.toLowerCase()}`)
        .then(response => response.json())
        setPoke({
            name: data.name,
            id: data.id,
            pokedex_entry: pokedex.flavor_text_entries[0].flavor_text,
            movements: data.moves.slice(0,3),
            img: data.sprites.front_default
        })
    }

    return(
        <div style={{margin: "2%"}}>

            <button onClick={() => router.back()}>Regresar</button>

            <h1>PokeAPI search</h1>

            <div className={styles.container}>
                <div>
                    <img width={200} src={poke.img == "" ? "https://i.pinimg.com/originals/32/eb/23/32eb230b326ee3c76e64f619a06f6ebb.png" : poke.img}></img>
                </div>
                    <div className={styles.pokeinfo}>
                        { poke.name ?
                            <>
                                <h1>{(poke.name.charAt(0).toUpperCase() + poke.name.slice(1))}</h1>
                                <p>ID: {poke.id}</p>
                                <h3>Description:</h3>
                                <p>{poke.pokedex_entry.replace("\n","").replace("\f"," ")}</p>
                            </>
                            :""
                        }
                    </div>
                <div className={styles.pokeinput}>
                <label htmlFor="pokeinput">Select a pokemon (or its id)</label>
                <input onChange={(e) => handleValue(e)} type="text" placeholder="Name:" value={value}></input>
                <button onClick={() => getPoke()}>Generate data</button>
                </div>
            </div>
        </div>
    )
}