import { Container, Card } from "react-bootstrap"

export const ItemDetailContainer = ({prod}) => (
			<Container className="d-flex flex-wrap product">
					/<Card key={prod.id} style={{ flex: 1 }}>
						<Card.Img variant="top" src={prod.imgId} height="200" />
						<Card.Body>
							<Card.Title ><strong>Nombre:</strong> {prod.name}</Card.Title>
							<Card.Text ><strong>Detalle:</strong> {prod.detail}</Card.Text>
							<Card.Text ><strong>Categoría:</strong> {prod.categoryId}</Card.Text>
							<Card.Text ><strong>Precio:</strong> {prod.price}</Card.Text>
							<Card.Text ><strong>Stock:</strong> {prod.stock}</Card.Text>
						</Card.Body>					

					</Card> 
					
			</Container>
);
