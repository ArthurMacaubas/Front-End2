"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [cont, setCont] = useState(0);
  const [estilo, setEstilo] = useState("colorido")

  const excluir = () => {
    setCont(cont - 1);
    
  }

  const adicionar = () => {
    setCont(cont + 1);
    
  }


  return (
    <div className={styles.body}>
      <h1 className={styles.h1}>Hello World!</h1>
      <p className={styles.p}>Contador</p>
      <button onClick={() => adicionar()}>Adicionar</button>
      <button onClick={() => excluir()}>Excluir</button>
      <p>Contagem {cont}</p>

      <button onClick={() => {setEstilo("colorido")}}>Estilo 1</button>
      <button onClick={() => {setEstilo("cinza")}}>Estilo 2</button>
      <div className={`${styles.box} ${estilo === "colorido" ? styles.colorido : styles.cinza}`}></div>
    </div>
  );
}
