
import BlogPost from "../../components/blog";
import styles from "../../app/style/blog.module.css";


export const metadata = {

    title: "GuitarLA - Acerca del blog",
    description: "My App guitarras",
};

export default function PageBlog() {

    return (
        <main className="contenedor">
            <h1 className="heading">Nuestros Post</h1>

            <BlogPost />

        </main>
    );
}
