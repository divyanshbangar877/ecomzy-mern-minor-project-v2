// import { toast } from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";
// import {add ,remove} from "../redux/Slices/CartSlice";

// const Product = ({post}) => {

//   const {cart} = useSelector((state) => state);
//   const dispatch = useDispatch();

//   const addToCart = () => {
//     dispatch(add(post));
//     toast.success("Item added to Cart");
//   }

//   const removeFromCart = () => {
//     dispatch(remove(post.id));
//     toast.error("Item removed from Cart");
//   }

//   return (
//     <div className="flex flex-col items-center justify-between 
//     hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">
//       <div>
//         <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{post.title}</p>
//       </div>
//       <div>
//         <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
//       </div>
//       <div className="h-[180px]">
//         <img src={post.image} className="h-full w-full " />
//       </div>

//       <div className="flex justify-between gap-12 items-center w-full mt-5">
//         <div>
//           <p className="text-green-600 font-semibold">${post.price}</p>
//         </div>
        
//         {
//           cart.some((p) => p.id == post.id) ?
//           (<button
//           className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
//           text-[12px] p-1 px-3 uppercase 
//           hover:bg-gray-700
//           hover:text-white transition duration-300 ease-in"
//           onClick={removeFromCart}>
//             Remove Item
//           </button>) :
//           (<button
//           className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
//           text-[12px] p-1 px-3 uppercase 
//           hover:bg-gray-700
//           hover:text-white transition duration-300 ease-in"
//           onClick={addToCart}>
//             Add to Cart
//           </button>)
//         }
//       </div>
     

//     </div>
//   );
// };

// export default Product;
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  };

  const isInCart = cart.some((p) => p.id === post.id);

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col">

      {/* CATEGORY (optional but premium look) */}
      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full w-fit mb-2">
        {post.category}
      </span>

      {/* IMAGE */}
      <div className="h-48 flex items-center justify-center">
        <img
          src={post.image}
          alt={post.title}
          className="h-full object-contain hover:scale-105 transition"
        />
      </div>

      {/* TITLE */}
      <h3 className="text-lg font-semibold text-gray-800 mt-4 line-clamp-2">
        {post.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-sm text-gray-500 mt-2 line-clamp-2">
        {post.description}
      </p>

      {/* PRICE + BUTTON */}
      <div className="mt-auto flex items-center justify-between pt-4">
        <span className="text-xl font-bold text-green-600">
          ${post.price}
        </span>

        {isInCart ? (
          <button
            onClick={removeFromCart}
            className="border-2 border-red-500 text-red-500 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-500 hover:text-white transition"
          >
            Remove
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;

