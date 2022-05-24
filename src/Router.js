import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
const Router = () => {
  const Pets = () => <h1>Pet List</h1>;
  // const Layout = () => <h1>Layout</h1>;
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
           
                <Footer />
              </>
            }
          >
            <Route path="catalogo" element={<Home />}></Route>
            <Route path="pets" element={<Pets />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Router;
