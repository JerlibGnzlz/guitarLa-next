import Link from 'next/link';
import Image from 'next/image';
import styles from "../app/style/blog.module.css"


export default async function BlogPost() {


    const { data } = await loadPostBlog()
    console.log(data)

    return (


        <div className={styles.blog}>
            {data?.map((blog) => (
                <div key={blog.id}>
                    <h3>{blog.attributes.titulo}</h3>
                    <Image src={blog.attributes}
                        width={400}
                        height={900}
                        alt={'Imagen de Guitarras'}
                    />
                    <Link href={`/guitarras/${blog.attributes.url}`} >
                        Ver Producto
                    </Link>
                </div>

            ))}
        </div>

    )
}




export async function loadPostBlog() {
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
    const resultado = await respuesta.json();


    console.log(resultado.data);


    return resultado;

}
