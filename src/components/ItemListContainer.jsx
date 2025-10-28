import { Link } from "react-router-dom"
import { Container, Card, Button } from "react-bootstrap"

export const ItemListContainer = ({prods}) => (
			<Container className="d-flex flex-wrap product">
				{prods.map(product => (
					<Card key={product.id} style={{ flex: 1 }}>
						<Card.Img variant="top" src={product.imgId} height="200" />
						<Card.Body>
							<Card.Title>{product.name}</Card.Title>
							<Link to={`/products/${product.id}`}>
								<Button variant="primary">Ir al Producto </Button>
							</Link>
						</Card.Body>
					</Card>
				))}
			</Container>
);
