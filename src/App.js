
import RecipeReviewCard from "./components/Cards/card";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Layout from "./components/Layout/Layout";

function App() {

  return (
    <div className="App">
       <Layout>
        <Header/>
        <ItemListContainer usuario="alexandracynthia@hotmail.com" nombre = "Alexandra" apellido="Mendoza"/>
        
          <div className="cards"  >
              <RecipeReviewCard title="Sueter perro pequeño" parrafo="Material 100% algodón" imagen="https://ae01.alicdn.com/kf/Sc4c807081ea648a48e6d814c933e5e19U/Puppy-Dog-Sweaters-for-Small-Medium-Dogs-Cats-Clothes-Winter-Warm-Pet-Turtleneck-Chihuahua-Vest-Soft.jpg_220x220xz.jpg_.webp" parrafo_sec="Suéteres para perros pequeños y medianos, ropa cálida de invierno para mascotas, chaleco de cuello alto para Chihuahua, abrigo suave Yorkie, chaqueta de peluche" precio="S/50.00"/>
              <RecipeReviewCard title="Casaca perro pequeño" parrafo="Material 100% algodón" imagen="https://ae01.alicdn.com/kf/Saf7d8f82e0284f02b9886e3b213c549d6/Ropa-c-lida-para-perros-peque-os-mono-impermeable-con-cuello-integrado-para-cachorros-abrigo-reflectante.jpg_Q90.jpg_.webp" parrafo_sec="Ropa cálida de invierno para mascotas, chaleco de cuello alto para Chihuahua, abrigo suave Yorkie, chaqueta de peluche" precio="S/60.00"/>
              <RecipeReviewCard title="Juegos perro grande" parrafo="Material 100% algodón" imagen="https://ae01.alicdn.com/kf/Hb4d990a33f9241f9844325b247582b8ak/Pet-Puppy-Cat-Donuts-Squeaky-Plush-Toy-Chew-Squeaker-Sound-Dog-Play-Bite-Toys-Watermelon-Ice.jpg_220x220xz.jpg_.webp" parrafo_sec="Perros pequeños y medianos, ropa cálida de invierno para mascotas, chaleco de cuello alto para Chihuahua, abrigo suave Yorkie, chaqueta de peluche" precio="S/85.00"/>
              <RecipeReviewCard title="Sueter para gato adulto" parrafo="Material 100% algodón" imagen="https://ae01.alicdn.com/kf/Sd708948072c9477398077173dd9375cck/Cat-clothes-winter-jacket-Suit-for-cat-sweater-pet-coat-Cats-pets-products-for-christmas-Accessories.jpg_220x220xz.jpg_.webp" parrafo_sec="Chaleco de cuello alto para Chihuahua, abrigo suave Yorkie, chaqueta de peluche" precio="S/70.00"/>
          </div>  
       
       </Layout> 
    </div>
        
       
  );
}

export default App;
