import header from '../public/img/header.jpg'
// import Image from 'next/image'

export default function Header() {
    return (
        <header>
            <div className="contenedor">
                <img src={header.src} alt="Imagen de guitarra" />

            </div>
        </header>
    )
}
