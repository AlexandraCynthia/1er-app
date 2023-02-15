import { Link } from "react-router-dom"
import ListNavbar from "../ListNavbar/ListNavbar"



export const Navbar = () => {

    return(
      
            <ul  style={{textAlign: 'center' }}>
             <Link to="/category/perros"> <ListNavbar title="Perros"/> </Link>
             <Link to="/category/gatos"> <ListNavbar title="Gatos"/>  </Link>
             <Link  to="/"> <ListNavbar title="Todos"/>  </Link>
            </ul>
        

    )

}