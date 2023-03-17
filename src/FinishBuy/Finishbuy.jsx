import { Link } from '@mui/material'
import React from 'react'


const Finishbuy = ({orderId}) => {
  return (
    <div>
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
          <h1>La compra fue realizada</h1>
          <h1>El id de la compra es: {orderId} </h1>
          <Link to="/"> Volver al home</Link>  
  
        </div> 
    </div>
  )
}

export default Finishbuy
