import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Carrousel from './components/Carrousel/Carousel';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Carrousel/> */}
      <Home/>
    </div>
  );
}

export default App;
