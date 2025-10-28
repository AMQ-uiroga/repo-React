import { Container, Card } from "react-bootstrap"

export const ItemDetailContainer = ({prod}) => (
			<Container className="d-flex flex-wrap product">
					<Card key={prod.id} style={{ flex: 1 }}>
						<Card.Img variant="top" src={prod.imgId} height="200" />
						<Card.Body>
							<Card.Title>{prod.name}</Card.Title>
							<Card.Text>{prod.detail}</Card.Text>
							<Card.Text>{prod.category}</Card.Text>
						</Card.Body>
					</Card>
			</Container>
);
