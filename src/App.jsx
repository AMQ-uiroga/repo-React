import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar";
import { Error404 } from "./views/Error404";
import { Contact } from "./views/Contact";
import { Home } from "./views/Home";
import { ProductsByCategory } from "./views/ProductsByCategory";
import { ConexionPrueba } from "./views/ConexionPrueba";
import "./App.css";
import { Detail } from "./views/Detail";
import { CartProvider } from "./context/cartContext";
import { Cart } from "./views/Cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter basename="/repo-React">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/category/:categoryId"
            element={<ProductsByCategory />}
          />
          <Route path="/products/:productId" element={<Detail />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/prueba" element={<ConexionPrueba />} />
		  <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
