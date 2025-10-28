import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ItemListContainer } from "../components/ItemListContainer";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../tools/firebase.jsx";

export const ProductsByCategory = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const orderCollection = categoryId
      ? query(collection(db, "productos"), where("categoryId", "==", categoryId))
      : collection(db, "productos");
    getDocs(orderCollection).then((snapshot) => {
      if (snapshot.size === 0) setProducts([]);
      else {
        setProducts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
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
