// import {FaShoppingCart} from "react-icons/fa"
// import { useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {

//   const {cart} = useSelector((state) => state);

//   return (
//     <div >
//       <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">

//         <NavLink to="/">
//           <div className="ml-5">
//           <img src="../logo.png" className="h-14"/>
//           </div>
//         </NavLink>

//           <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
//             <NavLink to="/">
//               <p>Home</p>
//             </NavLink>

//             <NavLink to="/cart">
//               <div className="relative">
//                   <FaShoppingCart className="text-2xl"/>
//                   {
//                     cart.length > 0 &&
//                     <span
//                     className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
//                     justify-center items-center animate-bounce rounded-full text-white" 
//                     >{cart.length}</span>
//                   }
                  
//               </div>
//             </NavLink>
            
//           </div>
//       </nav>
//     </div>
//   )
// };

// export default Navbar;
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {FaShoppingCart} from "react-icons/fa";
import { isLoggedIn, getUser, logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
const navigate = useNavigate();
const loggedIn = isLoggedIn();
const user = getUser();

  const navLinkClass =
    "text-gray-700 hover:text-green-600 font-medium transition";

  const activeClass =
    "text-green-600 font-semibold border-b-2 border-green-600";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-extrabold text-green-600">
          ECOMZY
        </Link>

        {/* NAV LINKS */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <NavLink to="/" className={({ isActive }) =>
              isActive ? activeClass : navLinkClass
            }>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={({ isActive }) =>
              isActive ? activeClass : navLinkClass
            }>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/services" className={({ isActive }) =>
              isActive ? activeClass : navLinkClass
            }>
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/blog" className={({ isActive }) =>
              isActive ? activeClass : navLinkClass
            }>
              Blog
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={({ isActive }) =>
              isActive ? activeClass : navLinkClass
            }>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* CART */}
        <Link to="/cart" className="relative">
          <FaShoppingCart className="text-2xl"></FaShoppingCart>
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full px-2">
              {cart.length}
            </span>
          )}
        </Link>
{/* AUTH LINKS */}
{/* <div className="hidden md:flex gap-4 items-center">
  <NavLink
    to="/login"
    className={({ isActive }) =>
      isActive
        ? "text-green-600 font-semibold"
        : "text-gray-700 hover:text-green-600"
    }
  >
    Login
  </NavLink>

  <NavLink
    to="/signup"
    className="bg-green-600 text-white px-4 py-1.5 rounded-md hover:bg-green-700 transition"
  >
    Signup
  </NavLink>
</div> */}
{/* AUTH SECTION */}
<div className="hidden md:flex items-center gap-4">
  {loggedIn ? (
    <>
      <span className="text-gray-700 font-medium">
        Hi, {user?.name}
      </span>

      <button
        onClick={() => {
          logout();
          navigate("/login");
        }}
        className="border border-red-500 text-red-500 px-4 py-1.5 rounded-md hover:bg-red-500 hover:text-white transition"
      >
        Logout
      </button>
    </>
  ) : (
    <>
      <NavLink
        to="/login"
        className="text-gray-700 hover:text-green-600"
      >
        Login
      </NavLink>

      <NavLink
        to="/signup"
        className="bg-green-600 text-white px-4 py-1.5 rounded-md hover:bg-green-700 transition"
      >
        Signup
      </NavLink>
    </>
  )}
</div>


      </div>
    </nav>
  );
};

export default Navbar;

