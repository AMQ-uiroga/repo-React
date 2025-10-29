import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ItemDetailContainer } from "../components/ItemDetailContainer";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../tools/firebase.jsx";

export const Detail = () => {
  const [prod, setProd] = useState([]);
  const { productId } = useParams();

  useEffect(() => {
	const docRef = doc(db, "productos", productId);
	getDoc(docRef).then((docSnap) => {
	  setProd({ id: docSnap.id, ...docSnap.data() });
	});

  }, [productId]);

   return (
    <Container>
      <ItemDetailContainer prod={prod} />
    </Container>
  );
};
