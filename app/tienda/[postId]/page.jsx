export async function loadPostDinamic(id) {
    const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const resultado = await respuesta.json();

    return resultado;

}

export default async function PagesDinamic({ params }) {

    const data = await loadPostDinamic(params.postId)
    console.log(data)
    return (
        <div>
            <h1> Dynamic Routes </h1>
            {data.id} - {data.title}
            <p>{data.body}</p>
        </div >
    )
}

