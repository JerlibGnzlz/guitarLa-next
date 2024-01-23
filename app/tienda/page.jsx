import ListadoGuitarra from "../../components/listadoGuitarra";


export const metadata = {

    title: "GuitarLA - Acerca de la tienda",
    description: "My App guitarras",
};
export default function TiendaPage() {
    return (
        <main className="contenedor">
            <h1 className="heading">Nuestra Coleccion</h1>

            <ListadoGuitarra />

        </main>
    );
}
