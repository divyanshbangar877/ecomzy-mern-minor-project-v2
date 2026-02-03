 import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
import { Link } from "react-router-dom";

import API from "../api";
const Home = () => {
  

  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
 const [products, setProducts] = useState([]);
  async function fetchProductData() {
    setLoading(true);

    try{
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    }
    catch(error) {
      console.log("Error aagya ji");
      setPosts([]);
    }
    setLoading(false);
  }

//   async function fetchProductData() {
//   setLoading(true);

//   try {
//     const res = await API.get("/products");
//     setPosts(res.data);
//   } catch (error) {
//     console.log("Error aa gaya ji", error);
//     setPosts([]);
//   }

//   setLoading(false);
// }

  // useEffect( () => {
  //   fetchProductData();
  // },[])
    useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
    {/* HERO SECTION */}
<div className="w-full bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 text-white">
  <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-10">

    {/* LEFT CONTENT */}
    <div className="flex-1 text-center md:text-left">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
        Shop Smart with <span className="text-yellow-300">ECOMZY</span>
      </h1>

      <p className="mt-6 text-lg text-green-100 max-w-xl">
        Discover premium fashion, accessories, and daily essentials at the best prices.
        Simple shopping. Fast checkout. Secure experience.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <a
          href="#products"
          className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-green-100 transition"
        >
          Shop Now
        </a>

        {/* <a
          href="/cart"
          className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition"
        >
          View Cart
        </a> */}
        <Link
  to="/cart"
  className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition"
>
  View Cart
</Link>

      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex-1 flex justify-center">
      <img
        src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
        alt="Shopping"
        className="w-[300px] md:w-[420px] rounded-2xl shadow-2xl"
      />
    </div>

  </div>
</div>

      {/* {
        loading ? <Spinner />  :
        posts.length > 0 ? 
        (<div id="products" className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {
            posts.map( (post) => (
            <Product key = {post.id} post={post}/>
          ) )
          }
        </div>) :
        <div className="flex justify-center items-center">
          <p>No Data Found</p>
        </div> 
      } */}

{/* PRODUCTS SECTION */}
<div id="products" className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-gray-800">
        Our Products
      </h2>
      <p className="mt-4 text-gray-500 text-lg">
        Explore our handpicked collection just for you
      </p>
    </div>

    {/* Products Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((item) => (
        <Product key={item.id} post={item} />
      ))}
    </div>

  </div>
</div>


    </div>
  );
};

export default Home;
