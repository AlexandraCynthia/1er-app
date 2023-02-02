
const ItemListContainer = ({usuario, nombre, apellido}) => {
   
  // const {usuario, edad, apellido} = props
  
    return (
    <div>
      <div style={{display:"flex",  justifyContent:"center"}}> <h1>Bienvenidos a MiMascota.com</h1></div> 
      <h3>Hola {nombre} {apellido}</h3>
      <h3>Tu usuario es {usuario}</h3>
    </div>
  )
}

export default ItemListContainer
