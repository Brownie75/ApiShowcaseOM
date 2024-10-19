'use client'

import Image from "next/image";
//import styles from "./page.module.css";
import myPage from "./mypage.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  return (
    <div style={{margin: "2%"}}>

      <h1 style={{paddingBottom: "2%"}}>API Showcase</h1>
      <div className={myPage.container}>
        <div>
          <h3>PokeAPI</h3>
          <div style={{width:"200px"}}>
            <img height={200} src="https://images.wikidexcdn.net/mwuploads/wikidex/0/02/latest/20231226202856/Pok%C3%A9_Ball_%28Ilustraci%C3%B3n%29.png"></img>
            <button className={myPage.button} onClick={() => router.push("./pages/PokeShowcase")}>Click aqui</button>
          </div>
        </div>
        <div style={{width:"300px"}}>
          <h3>Bromas de Chuck Norris</h3>
          <img height={200} src="https://gcdn.emol.cl/curiosidades/files/2015/10/Chuck-Norris1.jpg"></img>

          <button className={myPage.button} onClick={() => router.push("./pages/ChuckShowcase")}>Click aqui</button>
        </div>
        <div style={{width:"256px"}}>
          <h3>Api de numeros</h3>
          <img height={200} src="https://i.blogs.es/b32a42/numbers-black-5-high-number-6_bf_1968886/650_1200.jpg"></img>

          <button className={myPage.button} onClick={() => router.push("./pages/Numbers")}>Click aqui</button>
        </div>
      </div>
    </div>
  );
}
