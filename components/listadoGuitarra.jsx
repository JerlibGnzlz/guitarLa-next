/* eslint-disable @next/next/no-async-client-component */
const ListadoGuitarra = async () => {
  const lista = await loadPostGuitar()
  console.log(lista.data)



  return (
    <div>
      {lista.data.map((post) => (
        <div key={post.id}>
          <h3>ID {post.id}</h3>
          <p>nombre {post.attributes.nombre}</p>
          <p>precio {post.attributes.precio}</p>
        </div>
      ))}
    </div>
  );

};

export default ListadoGuitarra;


export async function loadPostGuitar() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
  const resultado = await respuesta.json()


  return resultado

}