'use client'
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Numbers(){

    const router = useRouter();

    const [value, setValue] = useState("");
    const [numberinfo, setNumberInfo] = useState({
        numero: "",
        info: ""
    });

    function handleValue(e){
        setValue(e.target.value)
    }

    async function getNumber(){
        const data = await fetch(`http://numbersapi.com/${value}?json`)
        .then(response => response.json())
        console.log(data)
        setNumberInfo({
            numero: data.number,
            info: data.text
        })
    }

    return(
        <>
        <button onClick={() => router.back()}>Regresar</button>
            <h1>API de numeros!</h1>
            <div style={{display: "flex"}}>
                <div>
                    <img height={200} src="https://i.blogs.es/b32a42/numbers-black-5-high-number-6_bf_1968886/650_1200.jpg"></img>
                </div>
                <div style={{display: "flex", flexDirection: "column", marginLeft: "30px", width: "30%"}}>
                    <label htmlFor="number">Selecciona un numero</label>
                    <input name="number" onChange={(e) => handleValue(e)} type="text" placeholder="Name:"
                     value={value} style={{fontSize: "1.5rem", padding: "10px"}}></input>
                    <button onClick={() => getNumber()}
                    style={{height: "30px"}}>Generate data</button>
                    <div style={{width: "100%", marginTop: "50px"}}>
                        <p>{numberinfo.numero}{numberinfo != "" ? ":" : ""} {numberinfo.info}</p>
                    </div>
                </div>
            </div>
        </>
    )
}