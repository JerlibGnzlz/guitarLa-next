import Image from 'next/image'
import Navbar from './navbar'
import styles from "../app/style/header.module.css"

export default function Header() {
    return (
        <header className={styles.header} >
            <div className={`contenedor ${styles.barra}`}>
                <Image src="/img/logo.svg"
                    width={300}
                    height={40}
                    alt="Imagen logotipo" />
            </div>
            <Navbar />

        </header>
    )
}
