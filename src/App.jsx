import "./App.css";
import { CartWidget } from "./components/CartWidget";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <div className="header">
        <NavBar />
        <CartWidget />
      </div>
      <ItemListContainer saludo="Bienvenido Proximamente a la Tienda Online" />
    </>
  );
}

export default App;
