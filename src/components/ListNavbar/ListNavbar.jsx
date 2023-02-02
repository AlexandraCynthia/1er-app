import React from "react";

const ListNavbar = ({ title }) => {
  return (
    <li className="navbar"
      style={{
        listStyle: "none",
        display: "inline",
        marginRight: "10px",
        alignItems: "center",
        justifyContent: "center",
        float: "center",
        width: "5em",
        paddingRight: "30px",
        color: "black",
        fontWeight: 'bold'        
        
        
      }}
      
    >
      <a href = "/"> 
      {title}
      </a>
    </li>
  );
};

export default ListNavbar;
