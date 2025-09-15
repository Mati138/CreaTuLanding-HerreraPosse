import { useParams } from "react-router-dom";
import CatalogoList from "./catalogoList";
import { servicies }from '../../services'
import { useEffect, useState } from "react";


const CatalogoContainer = () => {
  const [productos, setProductos]= useState([])

  const { categoriaId } = useParams();

  useEffect(()=>{
    servicies.products.getAll()
      .then( data => setProductos(data))
  },[])
    
  const productosFiltrados = categoriaId
  ? productos.filter(prod => prod.categoria === categoriaId)
  : productos;

  return(
    <>
      <CatalogoList categoria = {categoriaId} productos={productosFiltrados} />
    </>
  )

};

export default CatalogoContainer;