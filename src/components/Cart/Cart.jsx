import React, { useState } from "react";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { Button } from "@mui/material";
import "./Cart.css";
import Swal from "sweetalert2";
import FormCheckOutt from "../FormCheckOutt/FormCheckOutt";
import { Form } from "formik";
import { Link } from "react-router-dom";
import Finishbuy from "../../FinishBuy/Finishbuy";


const Cart = () => {


  const { cart, clearCart, deleteProductById, getTotalPrice, getTotalItems } =
    useContext(cartContext);

    const [buy, setBuy] = useState(false)
    const [orderId, setOrderId] = useState(null)
    console.log(orderId)


  const clearCartAlert = () => {
    Swal.fire({
      title: "¿Deseas eliminar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      denyButtonText: `Cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Carrito eliminado", "", "success");
        clearCart();
      } else if (result.isDenied) {
        Swal.fire("No se guardaron los cambios", "", "info");
      }
    });
  };

  if ( orderId ){
    return  (<Finishbuy orderId={orderId} />)
  
  }


  if (cart.length < 1) {
    return (
      <div>
        <h1 className="textoCarritoVacio">Carrito Vacio</h1>
        <img
          className="carritovacio"
          src={
            "https://res.cloudinary.com/dgxnatqij/image/upload/v1678653364/proyectos/undraw_the_search_s0xf_l7ustc.svg"
          }
          alt=""
        />
      </div>
    );
  }


const total = getTotalPrice()



  return (
    <div>

      {!buy ? (<div className="cart-container">
        <div className="container-items">
          {cart.map((item) => {
            return (
              <div key={item.id} className="cart-item">
                <img src={item.img} alt="" />
                <div className="cart-item-info">
                  <h2>{item.name}</h2>
                  <h2>${item.precio}.-</h2>
                  <h2>Unidades: {item.quantity}</h2>
                </div>
                <Button
                  variant="contained"
                  onClick={() => deleteProductById(item.id)}
                >
                  Quitar
                </Button>
              </div>
            );
          })}
        </div>

        <div className="cart-info">
          <br />
          <br />
          <br />  
          <br />
          <br />
          <br />
          <h2>Descripcion del carrito: </h2>

          <h3>Cantidad de productos: {getTotalItems()} </h3>
          <h3>
            Precio total: {total > 0 ? total : "No hay items"}
          </h3>
          <h3>Descuento: </h3>
          <h3>Precio final: </h3>

          {cart.length > 0 && (
            <div className="btn-cart">
              <Button variant="contained" onClick={ ()=> setBuy(true) }>Ir a la compra</Button>
              <Button onClick={() => clearCartAlert()} variant="contained">
                Vaciar carrito
              </Button>
            </div>
          )}

          <h1>El total del carrito es S/{total}</h1>
        </div>
      </div>) : (
          <FormCheckOutt cart={cart} total={total} clearCart={clearCart} setOrderId={setOrderId} />
    )}

    </div>
  );
};

export default Cart;

//   return (
//     <div>
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       <br />
//       {/* <Form /> */}
//       <h1>Carrito de compras</h1>
//       {cart.map((item) => {
//         return (

//           <div className="cart-container">

//             <div className="container-items">
//               <div className="cart-item" key={item.id}>

//                 <img src={item.img} alt="" />
//                 <div className="cart-item-info">
//                   <h3>nombre: {item.title}</h3>
//                   <h3>precio: {item.precio}</h3>
//                   <h3>cantidad: {item.quantity}</h3>

//                   <button onClick={() => deleteProductById(item.id)}>
//                     Quitar
//                   </button>
//                  </div>
//               </div>
//             </div>
//           </div>
//         );
//       })}

//       <button onClick={clearCart}>Limpiar carrito</button>
//       <h1>El total del carrito es ${getTotalPrice()}</h1>
//     </div>
//   );
// };

// export default Cart;
