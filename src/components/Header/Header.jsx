import { Navbar } from "../Navbar/Navbar";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";




const Header = () => {

    

  return (
    <AppBar style={{backgroundImage: `url(https://res.cloudinary.com/dgxnatqij/image/upload/v1676250170/proyectos/perritos_mvohmr.png)`, width:"100%", height:"125px"}}>
       
        <Toolbar>
          <Typography variant="h4" style={{display: "flex", alignItems:"center"}}> <Link to="/"> <img src="https://res.cloudinary.com/dgxnatqij/image/upload/v1676252240/proyectos/logoperro_qrkwtv.png" alt="logo" style={{ width: 100, height: 100,marginLeft: '15px', marginTop:'50px'}}/></Link></Typography>
        </Toolbar>     
        <CartWidget />
        <Navbar/>
        
        
    </AppBar>
      
    );
   
};

export default Header;
