
import React, { useEffect, useState } from "react";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";

  const ItemDetailContainer = () => {
  const {id} = useParams()
  const [product, setProduct] = useState({})
  

  useEffect(() => {
    let ProductSelected = products.find(prod=>prod.id===Number(id))
     setProduct(ProductSelected)
  }, [])

  return (
    <div style={{paddingBottom: "100px"}}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 style={{paddingTop:"100px"}}>{product.title}</h1>
      <h2>{product.price}</h2>
      
    </div>
  )
};

export default ItemDetailContainer;
