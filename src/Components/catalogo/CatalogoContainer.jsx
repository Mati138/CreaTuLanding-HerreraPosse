import { useParams } from "react-router-dom";
import CatalogoList from "./catalogoList";
import { services }from '../../services'
import { useEffect, useState } from "react";


const CatalogoContainer = () => {
  const [productos, setProductos]= useState([]);
  const [loading, setLoading] = useState(true);

  const { categoriaId } = useParams();

  useEffect(()=>{
    setLoading(true);
    services.products.getAll()
      .then( data => setProductos(data))
      .finally(() => setLoading(false))
  },[]);
  
  const productosFiltrados = categoriaId
  ? productos.filter(prod => prod.categoria === categoriaId)
  : productos;

  if (loading) {
    return <p>Cargando stickers...</p>; 
  }
  if (!productos) {
    return <p>No se encontraron los stickers.</p>; 
}

  return(
    <>
      <CatalogoList categoria = {categoriaId} productos={productosFiltrados} />
    </>
  )

};

export default CatalogoContainer;