import Link from 'next/link'
import styles from "../app/style/header.module.css"




export default function Navbar() {
    return (
        <>
            <nav className={styles.navegacion}>
                <Link href="/">Inicio</Link>
                <Link href="./nosotros">Nosotros</Link>
                <Link href="./tienda">Tienda</Link>
                <Link href="./blog">Blog</Link>
            </nav>
        </>
    )
}

