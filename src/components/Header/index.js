import styles from "@/components/Header/index.module.css"

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="./page">Home</a></li>
                    <li><a href="./produtos/page">Produtos</a></li>
                </ul>
            </nav>
        </header>
    )
}