import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";



const ItemListContainer = () => {
   
  const {categoryId} = useParams();
  
  const [items, setItems] = useState([]);

 
 
useEffect(()=>{

  const productsFiltered = products.filter((product)=>product.category===categoryId)


      const task = new Promise ((resolve, reject)=>{
        setTimeout(()=>{
          resolve(categoryId ? productsFiltered : products)
        }, 100)
  
    });
    task.then((res)=>{
       setItems(res);
    })
    .catch((error)=>{
      console.log("aca se rechazo",error)
    });
  
    },[categoryId])

    

  
    return (
    <>
      
      <div style={{display:"flex",  justifyContent:"center", marginTop:"120px"}}> <h1>Bienvenidos a ForPets.com</h1></div> 
      <ItemList items={items}/>
    </>
  );
};

export default ItemListContainer
