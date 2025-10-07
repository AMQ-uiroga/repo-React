import { CartWidget } from "./CartWidget";

export const NavBar = () => (
  <>
    <nav className="navbar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Catálogo</a>
        </li>
        <li>
          <a href="#">Contacto</a>
        </li>
        <li>
          <CartWidget />
        </li>
        
      </ul>
    </nav>
  </>
);
