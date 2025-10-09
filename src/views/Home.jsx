import { useState, useEffect } from "react"
import {  useParams } from "react-router-dom"
import { Container } from "react-bootstrap"
import { ItemListContainer } from "../components/ItemListContainer"

import data from "../data/products.json"

export const Home = () => {
	const [products, setProducts] = useState([])
	const { categoryId } = useParams()

		useEffect(() => {
		setProducts(data)
	}, [categoryId])
	
	return (
		 <Container >
            <span className="titulo"> HOME</span>        
                   
            <ItemListContainer prods={products} />         
        </Container>
	)
}