import Link from "next/link"
import styles from "./Header.module.css"

export default  function Header(){
    return(
        <header className={styles.header}>
            <nav>
                <ul className={styles.lista}>
                <li>
                   <Link className={styles.Pheader} href="/">Sanrio</Link> 
                </li>
                <li>  
                    <Link className={styles.Pheader} href="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link className={styles.Pheader} href="/personagens">Personagens</Link>
                </li>
                </ul>
            </nav>
        </header>
    )
}