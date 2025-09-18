"use client"
import { useState } from "react"
import styles from "./header.module.css"
import Link from "next/link"

export default function Header() {
    
    const [show, setShow] = useState(false)

    return (
        <>
            <header>
                <button onClick={() => setShow(!show)}>Menu</button>
                {show && (
                    <div style={{height: "200px", border: "2px solid white"}}>
                        <p>Mobile</p>
                    </div>
                )}
            </header>

            <header className={styles.header}>
                <nav>
                    <ul className={styles.ulMenu}>
                        <li className={styles.liMenu}><Link className={styles.link} href="/">Home</Link></li>
                        <li className={styles.liMenu}><Link className={styles.link} href="./produtos">Produtos</Link></li>
                            <ul className={styles.ulSubMenu}>
                                <li className={styles.liSubMenu}><Link className={styles.link} href="/produtos">Cadastrar</Link></li>
                                <li className={styles.liSubMenu}><Link className={styles.link} href="/produtos">Pesquisar</Link></li>
                            </ul>
                    </ul>
                </nav>
            </header>
        </>
    )
}