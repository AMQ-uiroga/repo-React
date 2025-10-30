import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import { Badge, Button } from "react-bootstrap";
import cart from "../assets/cart.png";

const styles = {
  span: {
    paddingLeft: 10,
  },
  img: {
    height: 30,
  },
};

export const CartWidget = () => {
  const { productos } = useContext(CartContext);

  const totalQuantity = () =>
    productos.reduce(
      (acumulador, valorActual) => acumulador + valorActual.quantity,
      0
    );

  return (
    !!totalQuantity() && (
      <Link to="/cart">
        <Badge bg="info">
          <div>
          <span style={styles.span}>{totalQuantity()}</span>
          <span className="visually-hidden">-Productos</span>
          </div>
          <div>          
          <img src={cart} alt="Changuito" style={styles.img} />
          </div>

        </Badge>
      </Link>
    )
  );
};

