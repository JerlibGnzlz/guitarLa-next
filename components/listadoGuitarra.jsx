import Link from 'next/link'
/* eslint-disable @next/next/no-async-client-component */
import Image from 'next/image'

const ListadoGuitarra = async () => {
  const { data } = await loadPostGuitar()

  console.log(data)



  return (
    <div>
      {data.map((guitar) => (
        <div key={guitar.id}>
          <p>{guitar.attributes.nombre}</p>
          <p>{guitar.attributes.precio}</p>
          {/* <p>{guitar.attributes.url}</p> */}
          <Image src={guitar.attributes}
            width={400}
            height={900}
            alt={'Imagen de Guitarras'}
          />
          <Link href={`/guitarras/${guitar.attributes.url}`} >Ver Producto</Link>
        </div>

      ))}
    </div>
  );

};

export default ListadoGuitarra;


export async function loadPostGuitar() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const resultado = await respuesta.json()

  // console.log(resultado.data.attributes)
  console.log(resultado.data)


  return resultado

}