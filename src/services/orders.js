import { collection, addDoc } from "firebase/firestore";
import { utils } from "../utils";

const create = async (orderData) => {
  const docRef = await addDoc(collection(utils.db, "ordenes"), {
    ...orderData,
    fecha: new Date(),
  });
  return docRef.id;
};

export const orders = {create}