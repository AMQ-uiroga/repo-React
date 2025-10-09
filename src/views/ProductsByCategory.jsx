import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ItemListContainer } from "../components/ItemListContainer";

import data from "../data/products.json";

export const ProductsByCategory = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 500);
    })
      .then((response) => {
        if (categoryId) {
          const productsFilteredByCategory = response.filter(
            (product) => product.category === categoryId
          );

          console.log({ response, productsFilteredByCategory });
          setProducts(productsFilteredByCategory);
        }
      });
      
  }, [categoryId]);

  return (
    <Container>
      <span className="titulo"> {categoryId} </span>
      <ItemListContainer prods={products} />
    </Container>
  );
};
