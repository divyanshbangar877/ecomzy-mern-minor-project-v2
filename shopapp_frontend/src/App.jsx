import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { Toaster } from "react-hot-toast";
import Success from "../src/success";

const App = () => {
  return (<div>
        <div className="bg-slate-900">
       
          <Navbar/>
 <Toaster/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/success" element={<Success />} />
        </Routes>
  </div>)
};

export default App;
