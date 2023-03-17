import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { PropagateLoader } from "react-spinners";
import { db } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore"
import ItemListCont from "./ItemListCont.css"

const styles = {
  display: "block",
  margin: "0 auto",
  borderColor: "#36d7b7",
};

const ItemListContainer = () => {
  const { categoryId } = useParams();

  const [items, setItems] = useState([]);

 
 
  useEffect(() => {

    const itemCollection =  collection( db, "products" )
  
      if(categoryId){

        const q = query( itemCollection, where("category", "==", categoryId))

     getDocs(q)
      .then((res)=>{
         const products = res.docs.map(product => {
            return {
               ...product.data(),
               id: product.id 

            }
         })
         setItems( products )
      })
      .catch((err)=>console.log("error :" + err))


      
    }else{

      getDocs(itemCollection)
      .then( (res)=> {
        const products = res.docs.map( product => {
            return {
              ...product.data(),
              id: product.id
            }
        })

        setItems( products )
      })
      .catch((err)=> console.log("error: " + err) )

    }

  }, [categoryId]);

  return (
    <div>
      {items.length < 1 ? 
        (<PropagateLoader className="loader"
          color={"#36d7b7"}
          cssOverride={styles}
          size={60}
          aria-label="Loading Spinner"
          data-testid="loader"
        />)
       : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "120px",
            }}
          >
            
            <h1>Bienvenidos a ForPets.com</h1>
          </div>
          <ItemList items={items} />
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
