import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import Product from "./pages/Product"
import Profile from "./pages/Profile"
import Contact from "./pages/Contact"
import SignUp from "./pages/SignUp"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import CheckoutForm from './components/CheckoutForm'
import Return from './components/Return'
import AppProvider from "./providers/AppProvider"
import Store from "./pages/Store"
// import NotFound from "./components/NotFound"
// import TopBanner from './components/TopBanner'

function App() {

  return (
    <AppProvider>
      {/* <TopBanner /> */}
      <BrowserRouter>
        <Header />
        <div className="bodycontent">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Store />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route path="/return" element={<Return />} />
            {/* <Route path="notfound" element={<NotFound />} />
            <Redirect to="/notfound" /> */}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AppProvider>
  )
}

export default App
