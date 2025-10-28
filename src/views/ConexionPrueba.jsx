import {
  doc,
  updateDoc,
  collection,
  addDoc,
  getDoc
} from "firebase/firestore";
import { db } from '../tools/firebase.jsx';

export const ConexionPrueba = () => {
  const sendOrder = () => {
    const order = {
      buyer: {
        name: "Avantt",
        phone: 33333,
        email: "fweewefff",
      },
      items: [
        { id: 3, title: "bicicleta", price: 200, quantity: 8 },
        { id: 5, title: "gorra", price: 2000, quantity: 6 },
      ],
      total: 13600,
    };

    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        alert("Su orden: " + id + " ha sido completada!");
      }
    });
  };

  const buyer = {
    name: "Avantt",
    phone: 33333,
    email: "fweewefff",
  };

  const updateOrder = () => {
    const orderDoc = doc(db, "orders", "knnzQ74lCahB1sZavjYy");
    updateDoc(orderDoc, {
      total: 333331,
      cuotas: 5,
      buyer: { ...buyer, phone: 55 },
    });
  };

  const readOrder = () => {
    const orderDoc = doc(db, "orders", "knnzQ74lCahB1sZavjYy");
    getDoc(orderDoc).then((res) => console.log(res.data()));
    console.log("Orden leida");
  }

  return (
    <div>
      <button onClick={sendOrder}>ENVIAR ORDEN</button>
      <button onClick={updateOrder}>ACTUALIZAR ORDEN</button>
      <button onClick={readOrder}>LEER ORDEN</button>
    </div>
  );
};
