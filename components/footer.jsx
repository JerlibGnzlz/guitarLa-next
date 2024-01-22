"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from "../app/style/footer.module.css";


export default function Footer() {
    const router = usePathname()

    return (

        <footer className={styles.footer}>
            <div className={`contenido ${styles.contenido}`} >

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

                <p className={styles.copyright}>Todos los derechos reservados {new Date().getFullYear()}</p>

            </div>

        </footer>
    );
}


