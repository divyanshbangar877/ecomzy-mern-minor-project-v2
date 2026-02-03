import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Invoice from "./pages/Invoice";
import { Toaster } from "react-hot-toast";
import Success from "../src/success";
import Footer from "../src/components/Footer"
const App = () => {
  return (<div>
        <div className="bg-slate-900">
       
          <Navbar/>
           <ScrollToTop />
    <Toaster/>
  
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/success" element={<Success />} />
           <Route path="/about" element={<About />} />
  <Route path="/services" element={<Services />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
<Route path="/invoice" element={<Invoice />} />

  {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
        <Footer />
        
  </div>)
};

export default App;
