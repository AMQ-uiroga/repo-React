import { Container, Card, Button, Row, Col } from "react-bootstrap"
import { useContext } from "react"
import { CartContext } from "../context/cartContext";

export const CartListContainer = () => {
    const { productos, removeItem } = useContext(CartContext);
    
    return (
        <Container className="my-4">
            <h2 className="mb-4 titulo-carrito">Carrito de Compras</h2>
            <Row className="mb-4">
                {productos && productos.map((product) => (
                    <Col md={12} key={product.id} className="mb-3">
                        <Card>
                            <Row className="g-0">
                                <Col md={2}>
                                    <Card.Img 
                                        src={product.imgId} 
                                        alt={product.name}
                                        className="img-fluid"
                                        style={{ height: '150px', objectFit: 'contain' }}
                                    />
                                </Col>
                                <Col md={8}>
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <Card.Text>
                                            Precio: ${product.price}
                                        </Card.Text>
                                        <Card.Text>
                                            Cantidad: {product.quantity}
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                                <Col md={2} className="d-flex align-items-center justify-content-center">
                                    <Button 
                                        variant="danger"
                                        onClick={() => removeItem(product.id)}
                                    >
                                        Eliminar
                                    </Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
