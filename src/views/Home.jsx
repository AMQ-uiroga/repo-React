import { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import { ItemListContainer } from "../components/ItemListContainer"
import { collection, getDocs } from "firebase/firestore"
import { db } from '../tools/firebase.jsx';


export const Home = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const orderCollection = collection(db, "productos");
		getDocs(orderCollection).then(snapshot => {
			if (snapshot.size === 0) setProducts([])
			else {
				setProducts(
					snapshot.docs.map(doc => ({
						id: doc.id,
						...doc.data(),
					}))
				)
			}
		})
	})
	
	return (
		 <Container >
            <span className="titulo"> HOME</span>        
                   
            <ItemListContainer prods={products} />         
        </Container>
	)
}