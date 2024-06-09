import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage'
import HomePage from './pages/HomePage/HomePage'
import ProductDetails from './components/ProductDetails/ProductDetails';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound/NotFound';

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
