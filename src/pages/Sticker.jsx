import { Link } from "react-router-dom"
import StickerDetailContainer from "../Components/sticker/StickerDetailContainer"
import '../Styles/sticker.css'


const Sticker = () => {
  

  return (
    <>
      <main class="sticker">
        <div className="volverContainer">
          <Link to='/catalogo'> Volver atras </Link>
        </div>
        <StickerDetailContainer />
      </main>
    </>
  )
}

export default Sticker
