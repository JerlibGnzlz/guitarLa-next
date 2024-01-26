import Link from "next/link"

export const metadata = {

    title: "GuitarLA - Page not found",
};

export default function NotFound() {
    return (
        <div >
            <p className="erro1">404</p>
            <p className="erro1">Page not found</p>
            <Link legacyBehavior href={"/"}>
                <a className="error">Regresar al Inicio</a>
            </Link>
        </div>
    )
}

