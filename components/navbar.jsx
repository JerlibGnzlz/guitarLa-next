"use client"
import { useParams } from 'next/navigation'
import Link from 'next/link'
import styles from "../app/style/header.module.css"



export default function Navbar() {
    const router = useParams()
    console.log(router)




    return (
        <>
            <nav className={styles.navegacion}>
                <Link href="/">
                    <a className={router.pathname == "/" ? styles.active : ""}>
                        Inicio
                    </a>
                </Link>
                <Link href="./nosotros">
                    <a className={router.pathname == "/nosotros" ? styles.active : ""}>
                        Nosotros
                    </a>
                </Link>
                <Link href="./tienda">
                    <a className={router.pathname == "/tienda" ? styles.active : ""}>
                        Tienda
                    </a>
                </Link>
                <Link href="./blog">
                    <a className={router.pathname == "/blog" ? styles.active : ""}>
                        Blog
                    </a>
                </Link>
            </nav >
        </>
    )
}

