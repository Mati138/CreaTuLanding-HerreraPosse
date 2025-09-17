import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { utils } from "../utils";


const getAll = async () =>{
    try {
        const querySnapshot = await getDocs(collection(utils.db,"productos"))

        const products = querySnapshot.docs.map(doc =>({
            id : doc.id,
            ...doc.data()
        }))
        
        return products

    } catch (error) {
        console.log(error)
    }
}

const getById = async (id) =>{
    try {
        // Referencia al documento
        const docRef = doc(utils.db, "productos", id);
        
        // Obtener el documento
        const docSnap = await getDoc(docRef);
        // Verificar si existe
        if (docSnap.exists()) {
            const sticker = docSnap.data()
            // return sticker
          return { id: docSnap.id, ...docSnap.data() };
        } else {
          console.log("No existe un producto con ese ID");
          return null;
        }
    } catch (error) {
        console.log("Error al obtener el producto:", error);
        throw error;
    }
}


export const products = { getAll, getById }