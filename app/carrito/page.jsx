
import styles from "../../app/style/carrito.module.css";


export const metadata = {

    title: "GuitarLA - Carrito",
};

export default function PageCarrito() {
    return (
        <main className='contenedor'>
            <h1 className="heading">
                Carrito
            </h1>

            <div className={styles.contenido}>
                <h2 className={styles.carrito}>
                    Articulos
                </h2>

                <aside className={styles.resumen}>
                    <h3>Resumen del pedido</h3>
                    <p>total a pagar:</p>
                </aside>
            </div>

        </main>
    )
}
