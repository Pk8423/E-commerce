
import Nav from './components/nav/Nav';
import React from 'react'
import Home from './pages/home/Home'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import footer from './components/footer/Footer'
import Footer from './components/footer/Footer';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
function App() {
  return (
    <>
   <BrowserRouter>
  <Nav/>
   <Routes>
    <Route path='/' element={<Home/>}/>
     <Route path='/shop' element={<Shop/>}/>
     <Route path='/Cart' element={<Cart/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
    </>
  )
}

export default App
