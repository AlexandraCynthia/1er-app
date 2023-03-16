//rafcev-- exporta por defecto
//rafce --exportacion nombrada

import { Link } from "react-router-dom";
import { TfiShoppingCartFull } from "react-icons/tfi";
import "./CartWidget.css";
import { useContext } from "react";
import { cartContext } from '../../context/CartContext'

const CartWidget = () => {

  const { getTotalItems} = useContext(cartContext)

  return (
    <Link to="/Cart">
      
      <div className="Container-Cart">
        <TfiShoppingCartFull
          style={{ fontSize: "1rem", color: "Blue", paddingLeft: "1295px" }}
        />
        <div className="bubble-counter" style={{ marginLeft: "1295px" }}>
          <span style={{ color: "purple" }}>{getTotalItems()}</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
