import React, { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import styles from "./ItemDetailStyle.css";
import Swal from "sweetalert2";

const ItemDetail = ({ product }) => {
  const { addToCart, getQuantityById } = useContext(cartContext);

  const onAdd = (cantidad) => {
    const obj = {
      ...product,
      quantity: cantidad,
    };

    addToCart(obj);

    let timerInterval;
    Swal.fire({
      title: "Producto agregado correctamente",
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        
      }
    });
  };

  const quantity = getQuantityById(product.id);

  return (
    <div className={styles.containerItemDetalle}>
      <div className={styles.imagenContainer}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <img src={product.img} alt="" />
      </div>

      <div className={styles.containerDetalle}>
        <h3 style={{ fontfamily: "monospace" }}>
          <span style={{ fontSize: "16px" }}>Nombre: </span>
          {product.title}
        </h3>
        <h3 style={{ fontfamily: "monospace" }}>
          <span style={{ fontSize: "16px" }}>Detalle: </span>
          {product.parrafo}
        </h3>
        <h3 style={{ fontfamily: "monospace" }}>
          <span style={{ fontSize: "16px" }}>Precio: S/</span>
          {product.precio}
        </h3>

        <ItemCount onAdd={onAdd} stock={product.stock} initial={quantity} />
      </div>
    </div>
  );
};

export default ItemDetail;
