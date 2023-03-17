import React, { useState } from 'react'
import {
    addDoc,
    collection,
    updateDoc,
    doc,
  } from "firebase/firestore";

  import { db } from '../../firebaseConfig'
  import { serverTimestamp } from 'firebase/firestore';



const FormCheckOutt = ({cart, total, clearCart, setOrderId}) => {

    const [userInfo, setUserInfo] = useState({nombre: "", telefono:"", email:""})


    const handleSubmit = (e) =>{
        e.preventDefault()
        
        const order ={
            buyer: userInfo,
            items: cart,
            total: total,
            date: serverTimestamp()
            

        }

        const orderCollection = collection(db,"orders")


        //generar orden de compra
        addDoc (orderCollection, order)
        .then(res => setOrderId(res.id))
        .catch(err => console.log (err))

        // codigo para descontar stock

        cart.map (product => {
            updateDoc(doc(db, "products",product.id), {stock:product.stock - product.quantity
            })
        })


        clearCart()
    }



  return (
    <div>
    <br /> 
    <br /> 
    <br /> 
    <br /> 
    <br /> 
    <br /> 
    <br /> 
    <br /> 
    <br /> 
   <form onSubmit={handleSubmit}>
     <input type="text" placeholder='Ingresa nombre' name="nombres y apellidos" onChange={(e)=>setUserInfo({...userInfo, nombre: e.target.value})} />
     <input type="text" placeholder='Ingresa telefono' name="telefono" onChange={(e)=>setUserInfo({...userInfo, telefono: e.target.value})} />
     <input type="text" placeholder='Ingresa tu correo' name="email" onChange={(e)=>setUserInfo({...userInfo, email: e.target.value})}/>
     <button>Comprar</button>



   </form>
    </div>
  )
}

export default FormCheckOutt
