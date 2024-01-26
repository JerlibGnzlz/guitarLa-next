import Link from "next/link"


export default function NotFound() {
    return (
        <div>
            <h1>404</h1>
            <h4>Page not found</h4>
            <Link href={"/"}>
                Regresar al Inicio
            </Link>
        </div>
    )
}

