import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import StickerDetail from "./StickerDetail"
import { servicies }from '../../services'
const StickerDetailContainer = () =>{

    const { idSticker } = useParams();
    const [sticker, setSticker] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true)
        servicies.products.getById(idSticker)
            .then(data => setSticker(data))
            .finally(() => setLoading(false));

    },[idSticker]);

    if (loading) {
        return <p>Cargando Sticker...</p>; 
    }
    
    if (!sticker) {
        return <p>No se encontró el sticker.</p>; 
    }
    
    return(
        <>
            <StickerDetail sticker={sticker} />
        </>
    )
}

export default StickerDetailContainer