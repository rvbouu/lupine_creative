import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import Product from "./pages/Product"
import Store from "./pages/Store"
import Profile from "./pages/Profile"
import Contact from "./pages/Contact"
import Header from "./components/Header"
import Footer from "./components/Footer"


function App() {


  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
            <Route path="/store" element={<Store />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>        
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
