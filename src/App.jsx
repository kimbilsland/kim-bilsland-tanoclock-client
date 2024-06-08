import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage'
import HomePage from './pages/HomePage/HomePage'
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
