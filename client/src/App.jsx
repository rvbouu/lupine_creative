import './App.css'
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom"
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import Product from "./pages/Product"
import Store from "./pages/Store"
import Profile from "./pages/Profile"
import Contact from "./pages/Contact"
import SignUp from "./pages/SignUp"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Cart from "./components/Cart"


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
            <Route path="/signup" element={<SignUp />} />
          </Routes>        
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
