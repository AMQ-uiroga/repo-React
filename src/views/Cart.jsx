import { CartListContainer } from "../components/CartListContainer";
import { CartTotals } from "../components/CartTotals";
import { Container } from "react-bootstrap";

export const Cart = () => {
  return (
    <Container>
      <CartListContainer />
      <CartTotals />
    </Container>
  );
};
