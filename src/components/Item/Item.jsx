import { Link } from 'react-router-dom'
import React from 'react'
import Button from '@mui/material/Button'


const Item = ({elemento}) => {
  return (
    <div key={elemento.id} style={{border:"1px solid black", width:"400px", height:"500px", marginBottom:"50px"}}>
    <h2>{elemento.title}</h2>
    <h2>{elemento.parrafo}</h2>
    <h2>{elemento.precio}</h2>
    <img src={elemento.img} alt="" style={{width:"100%", height:"250px"}}/>
    <Link to={`/item/${elemento.id}`}><Button className='boton' variant="contained" color="secondary">
      Ver producto
    </Button></Link>
  </div>

  )
}

export default Item
