import Image from 'next/image'
import Navbar from './navbar'

export default function Header() {
    return (
        <header>
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
