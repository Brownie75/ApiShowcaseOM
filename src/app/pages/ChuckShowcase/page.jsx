'use client'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation';


export default function UWU(){
    
    const router = useRouter();

    const [broma, setBroma] = useState("");

    async function getBroma(){
        const data = await fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json());

        if(data.value){
            console.log(data.value);
            setBroma("");
            setBroma(data.value);
        }
    }

    return(
        <>
        <button onClick={() => router.back()}>Regresar</button>
        <div className={styles.container}>
            <img width={300} height={200} src="https://gcdn.emol.cl/curiosidades/files/2015/10/Chuck-Norris1.jpg"></img>
            <div className={styles.broma}>
                <h1>Bromas de Chuck Norris</h1>
                <button onClick={() => getBroma()} style={{margin: "2% 0", height: "30px"}}>Generar broma</button>
                <p>{broma}</p>
            </div>
        </div>
        </>
    )
}