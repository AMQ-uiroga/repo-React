import "./App.css";
import { CartWidget } from "./components/CartWidget";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import logo from "./assets/logoStore.png";

function App() {
  return (
    <>
      <div className="header">
        <NavBar />
        <img
          src={logo}
          alt="logo de la tienda de color negro y rosa con la imagen de una remera y una bolsa que dice Clothing Store."
        />        
      </div>
      <ItemListContainer saludo="Bienvenido Proximamente a la Tienda Online" />
    </>
  );
}

export default App;
