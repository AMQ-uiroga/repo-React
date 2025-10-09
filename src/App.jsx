import { BrowserRouter, Routes, Route } from "react-router-dom"

import { NavBar } from "./components/NavBar"
import { Error404 } from "./views/Error404"
import { Contact } from "./views/Contact"
import { Home } from "./views/Home"
import { ProductsByCategory } from "./views/ProductsByCategory"
import "./App.css";
import { Detail } from "./views/Detail"

function App() {
  return (
    <BrowserRouter basename="/repo-React">
			<NavBar />
			<Routes>
        <Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
	      		<Route path="/category/:categoryId" element={<ProductsByCategory />} />
				<Route path="/products/:productId" element={<Detail />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</BrowserRouter>

  );
}

export default App;
