import { collection, getDocs } from "firebase/firestore";
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



export const products = { getAll }