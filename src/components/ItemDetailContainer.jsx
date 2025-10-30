import { Container, Card } from "react-bootstrap";
import { useContext } from "react"
import { CartContext } from "../context/cartContext";
import { Button } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';


export const ItemDetailContainer = ({ prod }) => {
  const { addItem } = useContext(CartContext)

  return (
  <Container className="d-flex flex-wrap product">
    
    <Card key={prod.id} style={{ flex: 1 }}>
      <Card.Img variant="top" src={prod.imgId} height="200" />
       <Card.Body>
        <Card.Title className="text-center">
          <strong>Nombre:</strong> {prod.name}
        </Card.Title>
        <Card.Text className="text-center">
          <strong>Detalle:</strong> {prod.detail}
        </Card.Text>
        <Card.Text>
          <strong>Categoría:</strong> {prod.categoryId}
        </Card.Text>
        <Card.Text>
          <strong>Precio:</strong> {prod.price}
        </Card.Text>
        <Card.Text>
          <strong>Stock:</strong> {prod.stock}
        </Card.Text>
        <Button variant="outline-primary" onClick={() => addItem(prod, 1)}>
          Agregar al carrito
        </Button>
      </Card.Body>     
     
    </Card>
  </Container>)
};
