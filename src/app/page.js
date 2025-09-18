"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const [cont, setCont] = useState(0);

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
    </div>
  );
}
