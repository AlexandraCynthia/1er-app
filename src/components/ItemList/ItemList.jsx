import React from "react";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
  
      <div
        style={{
          width: "100%",
          backgroundColor: "whitesmoke",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {items.map((elemento) => {
          return <Item elemento={elemento} key={elemento.id} />;
        })}
      </div>
   
  );
};

export default ItemList;
