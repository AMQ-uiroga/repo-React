import { createContext, useEffect } from "react"
import { useState } from "react"

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
	const [productos, setProductos] = useState(() => 
		JSON.parse(localStorage.getItem("cart")) || []
	);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(productos))
	}, [productos]);

	const addItem = (product, quantity) => {
		console.log(`Agregando ${quantity} de ${product.name} al carrito.`)
		const { stock, ...rest } = product
		const alreadyExists = productos.some(
			producto => producto.id === rest.id
		)
		if (!alreadyExists)
			setProductos(prev => [
				...prev,
				{ ...rest, quantity },
			])
		else {
			const actualizarProductos = productos.map(
				producto => {
					if (producto.id === rest.id)
						return {
							...producto,
							quantity: producto.quantity + quantity,
						}
					else return producto
				}
			)
			setProductos(actualizarProductos)
		}
		console.log(`Mis productos en el carrito:`, productos)
	}

	const removeItem = (productId) => {
		console.log(`Removiendo el producto con ID ${productId} del carrito.`)
		const otrosProductos = productos.filter(
			producto => producto.id !== productId
		)
		setProductos(otrosProductos)
		console.log(`Mis productos en el carrito:`, productos)
	}

	const clear = () => setProductos([])

	return (
		<CartContext.Provider
			value={{ productos, addItem, removeItem, clear }}
		>
			{children}
		</CartContext.Provider>
	)
}
