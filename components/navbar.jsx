"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from "../app/style/header.module.css"



export default function Navbar() {
    const router = usePathname()
    console.log(router)




    return (
        <>
            <nav className={styles.navegacion}>
                <Link className={`link ${router === '/' ? styles.active : ''}`} href="/">
                    Inicio
                </Link>

                <Link className={`link ${router === '/nosotros' ? styles.active : ''}`} href='/nosotros'>
                    Nosotros
                </Link>

                <Link className={`link ${router === "/tienda" ? styles.active : ''}`} href='/tienda'>
                    Tienda
                </Link>

                <Link className={`link ${router === '/blog' ? styles.active : ''}`} href='/blog'>
                    Blog
                </Link>
            </nav >
        </>
    )
}

