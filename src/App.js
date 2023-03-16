

import {BrowserRouter, Routes, Route} from "react-router-dom"

import Header from "./components/Header/Header";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./context/CartContext";
import Login  from "./components/Login/Login.jsx";


function App() {

  return (
 
      <BrowserRouter>
        <CartContextProvider>
         <Header />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />   
              <Route path="/category/:categoryId" element={<ItemListContainer />} />  
              <Route path="/item/:id" element={<ItemDetailContainer />} />   
              <Route path="/Cart" element={ <Cart />} />  
              
              <Route path="/login" element={ <Login />} />   
 
              <Route path="*" element={<h1 style={{paddingTop:"100px"}}>Error 404 not found</h1>} />   
            </Routes>
        </CartContextProvider>
      </BrowserRouter>
      



  );
}

export default App;
