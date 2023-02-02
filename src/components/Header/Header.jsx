import CartWidget from "../CartWidget/CartWidget";
import { Navbar } from "../Navbar/Navbar";
const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "20vh",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundImage: `url(https://res.cloudinary.com/dgxnatqij/image/upload/v1675297404/samples/react/Captura_agcnlw.png)` ,
       
      }}
    >
      
      <img src="https://w7.pngwing.com/pngs/1020/59/png-transparent-dog-logo-pet-food-cat-pet-food-food-animals-cat-like-mammal.png" alt="logo" style={{ width: 100, height: 100,marginLeft: '40px'}}/>
      <Navbar />
      <CartWidget />
    </div>
  );
};

export default Header;
