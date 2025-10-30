import { Container } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../tools/firebase.jsx";

export const CartTotals = () => {
  const { productos, clear } = useContext(CartContext);

  const total = () =>
    productos.reduce(
      (acumulador, valorActual) =>
        acumulador + valorActual.quantity * valorActual.price,
      0
    );

  const sendOrder = () => {
    const order = {
      buyer: {
        name: "Ana Maria",
        phone: 123456789,
        email: "amq@carrito.com",
      },
      items: productos,
      total: total(),
    };

    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        alert("Su orden: " + id + " ha sido completada!");
      }
    });
    clear();
  };

  return (
    <Container>
      <div className="titulo-carrito "> Total: ${total()}</div>
      <div className="titulo-carrito">
      <button  onClick={sendOrder} className="fw-bold" >FINALIZAR COMPRA</button>
      </div>
    </Container>
  );
};
