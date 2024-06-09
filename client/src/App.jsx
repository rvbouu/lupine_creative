import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Contact from "./pages/Contact"
import SignUp from "./pages/SignUp"
import Header from "./components/Header"
import Footer from "./components/Footer"
import CartChooser from './components/CartChooser'
import Return from './components/Return'
import { AppProvider } from "./providers/AppProvider"
import Store from "./pages/Store"

function App() {

  return (
    <AppProvider>
      <BrowserRouter>
        <Header />
        <div className="bodycontent">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Store />} />
            <Route path="/checkout" exact element={<CartChooser />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/return" element={<Return />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AppProvider>
  )
}

export default App