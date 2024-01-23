import Image from "next/image";
import Link from "next/link";
import styles from "../style/nosotros.module.css";

export const metadata = {

    title: "GuitarLA - Acerca de Nosotros",
    description: "My App guitarras",
};

const PageNosotros = () => {
    return (



        <main className="contenedor">
            <h2 className="heading">Nosotros</h2>

            <div className={styles.contenido}>

                <Image src="/img/nosotros.jpg"
                    width={1000}
                    height={800}
                    alt="Imagen sobre nosotros" />


                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius rhoncus ex, vitae pellentesque nisl congue sit amet. Vivamus dignissim sollicitudin lorem, sit amet porta leo sagittis at. Morbi at pellentesque leo. Sed finibus quam ut est bibendum.
                    </p>

                    <p>
                        Vestibulum erat risus, sagittis eu tortor at, scelerisque tempor dui. Praesent sit amet sapien placerat, venenatis tellus quis, euismod enim. Morbi imperdiet justo non sollicitudin semper. In aliquet vulputate laoreet. Aenean pharetra nunc ex, ut bibendum risus luctus eu. Nullam eget ex massa. In sagittis consectetur erat nec fermentum. In ultrices.
                    </p>

                </div>
            </div>
        </main>
    );
};

export default PageNosotros;