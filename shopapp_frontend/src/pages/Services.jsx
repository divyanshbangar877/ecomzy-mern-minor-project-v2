const Services = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-3">Product Browsing</h3>
          <p className="text-gray-600">
            Users can explore a wide range of products with detailed
            descriptions and pricing.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-3">Cart Management</h3>
          <p className="text-gray-600">
            Add or remove products from cart with real-time updates using Redux.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-3">Order Processing</h3>
          <p className="text-gray-600">
            Secure checkout system that stores order data in MongoDB database.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
