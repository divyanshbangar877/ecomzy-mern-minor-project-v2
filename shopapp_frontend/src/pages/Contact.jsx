const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>

      <p className="text-gray-600 text-lg mb-10">
        Have any questions or feedback? Feel free to reach out to us.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Details</h3>
          <p className="text-gray-600 mb-2">📍 Indore, India</p>
          <p className="text-gray-600 mb-2">📧 support@ecomzy.com</p>
          <p className="text-gray-600 mb-2">📞 +91 87707994XX</p>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow-md rounded-xl p-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-2 rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-2 rounded-md"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border p-2 rounded-md"
            rows="4"
          ></textarea>
          <button
            type="button"
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
