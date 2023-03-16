import { NavLink, Link } from "react-router-dom"
import ListNavbar from "../ListNavbar/ListNavbar"
import "./Navbar.css"



export const Navbar = () => {

    return(
      
            <ul  className="encabezado"   style={{textAlign: 'center' }}>

                 <NavLink to="/category/perros" className={({isActive})=>isActive?"active-navbar":"navbar-item"}> 
                    <ListNavbar title="Perros"/> 
                 </NavLink>

                 <NavLink to="/category/gatos" className={({isActive})=>isActive?"active-navbar":"navbar-item"}> 
                     <ListNavbar title="Gatos"/>  
                 </NavLink>

                 <NavLink to="/" className={({isActive})=>isActive?"active-navbar":"navbar-item"}> 
                    <ListNavbar title="Todos"/>  
                 </NavLink>
            </ul>
        

    )

}