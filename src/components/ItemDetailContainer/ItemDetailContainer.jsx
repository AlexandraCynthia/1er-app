
import React, { useEffect, useState } from "react";
// import { products } from "../../productsMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { db } from "../../firebaseConfig"; 
import { getDoc, collection, doc} from "firebase/firestore"


  const ItemDetailContainer = () => {
  const {id} = useParams()
  const [product, setProduct] = useState({})
  

  useEffect(() => {
    // let ProductSelected = products.find(prod=>prod.id===Number(id))
    //  setProduct(ProductSelected)
    const itemCollection = collection(db, "products")
    const ref = doc(itemCollection, id)

    getDoc(ref)
      .then((res)=>{
        setProduct({
          ...res.data(),
          id:res.id
        })
      })
      .catch( err => console.log(err))

  }, [id])

  return (
         <ItemDetail product={product} />
      )
};

export default ItemDetailContainer;
