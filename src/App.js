import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Carrousel from "./components/Carrousel/Carousel";
import Footer from "./components/Footer/Footer";
import Catalogo from "./components/Catalogo/Catalogo";
import Carrito from './components/Carrito/Carrito'
import {  Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<><Navbar /><Home/><Footer/></>}/>

          <Route path="/catalogo" element={<Catalogo />}/>
          <Route path="/carrito" element={<Carrito />}/>
        </Routes>
    </div>
  );
}

export default App;
