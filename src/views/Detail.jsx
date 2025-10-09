import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Container } from "react-bootstrap"
import data from "../data/products.json"
import { ItemDetailContainer } from "../components/ItemDetailContainer"



export const Detail = () => {
	const [prod, setProd] = useState([])
	const { productId } = useParams()

		useEffect(() => {
		if (productId) {
			const productsFiltered = data.filter(
				product => product.id === productId
			)

			console.log({ data, productsFiltered })
			setProd(productsFiltered[0])
		}
	}, [productId])
	
	return (
		<Container>	
			<ItemDetailContainer prod={prod} />
		</Container>
	)
}