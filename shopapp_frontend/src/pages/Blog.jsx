const Blog = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Our Blog</h1>

      <div className="space-y-8">
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-2">
            Why MERN Stack is Popular?
          </h2>
          <p className="text-gray-600">
            MERN stack provides a powerful combination of technologies for
            building scalable and efficient web applications.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-2">
            Benefits of Online Shopping
          </h2>
          <p className="text-gray-600">
            E-commerce platforms provide convenience, variety, and easy access
            to products anytime.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-2">
            Role of Redux in State Management
          </h2>
          <p className="text-gray-600">
            Redux helps manage application state efficiently across multiple
            components.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
