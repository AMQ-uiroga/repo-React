import { Container } from "react-bootstrap";

export const Contact = () => {
  return (
    <Container className="mt-4">
      <span className="titulo">Contacto</span>
	  <form  className="contacto-form">
      <div > 
        <label htmlFor="nombreInput">Nombre:</label>
        <input type="text" id="nombreInput" name="nombre" />
      </div>
      <div>
        <label htmlFor="emailInput">Email:</label>
        <input type="email" id="emailInput" name="email" />
      </div>
	   <div>
        <label htmlFor="telefonoInput">Telefono:</label>
        <input type="telefono" id="telefonoInput" name="telefono" />
      </div>
    </form>
    </Container>
  );
};
