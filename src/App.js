import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Pricing from './Components/Pricing/Pricing';
import Reviews from './Components/Reviews/Reviews';
import Bonsaitax from './Components/Bonsaitax/Bonsaitax';
import Bonsaicash from './Components/Bonsaicash/Bonsaicash';
import Bonsaiwork from './Components/Bonsaiwork/Bonsaiwork';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import Startfree from './Components/Startfree/Startfree';


function App() {
  return (
    <div>
   <Header></Header>
   <Routes>
   <Route path="/" element={<Home></Home>}></Route>
   <Route path="/pricing" element={<Pricing></Pricing>}></Route>
   <Route path="/reviews" element={<Reviews></Reviews>}></Route>
   <Route path="/bonsaitax" element={<Bonsaitax></Bonsaitax>}></Route>
   <Route path="/bonsaicash" element={<Bonsaicash></Bonsaicash>}></Route>
   <Route path="/bonsaiwork" element={<Bonsaiwork></Bonsaiwork>}></Route>
   <Route path="/about" element={<About></About>}></Route>
   <Route path="/login" element={<Login></Login>}></Route>
   <Route path="/startfree" element={<Startfree></Startfree>}></Route>
   </Routes>
   <Footer></Footer>
    </div>
  );
}

export default App;
