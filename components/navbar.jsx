import Link from 'next/link'


export default function Navbar() {
    return (
        <>
            <nav>
                <h1>Navbar</h1>
                <ul>
                    <li>
                        <Link href="./nosotros">Ir a la pagina nosotros</Link>
                    </li>
                    <li>
                        <Link href="./about">Ir a la pagina about</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

