import Image from 'next/image'
import Navbar from './navbar'
import style from "../app/style/header.module.css"

export default function Header() {
    return (
        <header className={style.header} >
            <div className="contenedor">
                <Image src="/img/logo.svg"
                    width={300}
                    height={40}
                    alt="Imagen logotipo" />
            </div>
            <Navbar />

        </header>
    )
}
