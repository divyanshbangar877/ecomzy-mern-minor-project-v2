import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const Success = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        
        <div className="flex justify-center mb-4">
          <CheckCircle size={80} className="text-green-600" />
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Order Placed Successfully 🎉
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for shopping with us.  
          Your order has been placed and will be processed soon.
        </p>

        <div className="flex flex-col gap-3">
          <Link to="/">
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition">
              Continue Shopping
            </button>
          </Link>

         
        </div>

      </div>
    </div>
  );
};

export default Success;
