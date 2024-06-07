import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage/LandingPage'
import HomePage from './pages/HomePage/HomePage'
// import ProductPage from './pages/ProductDetails/ProductDetails'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<HomePage />} />
        {/* <Route path="/products" element={<ProductPage/>}/> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
