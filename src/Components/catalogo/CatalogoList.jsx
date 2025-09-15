import '../../Styles/catalogo.css'
import CatalogoCard from './CatalogoCard';


const CatalogoList = ({categoria, productos}) => {
    return(
      <>
        <section className='catalogo'>
          <h1 className='tituloCategoria'>{categoria ? categoria : 'Todas las categorias'}</h1>
        <div className="cardContenedor">
          {
            productos.length > 0 ? (
              productos.map(producto => (
                <CatalogoCard key={producto.id} productos={producto} />
              ))
            ) : (
              <p className="proximamente">Próximamente…</p>
            )
          }
        </div>
        </section>
      </>
    )
  
  };
  
  export default CatalogoList;