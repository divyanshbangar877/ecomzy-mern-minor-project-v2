import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-white">ECOMZY</h2>
          <p className="mt-4 text-sm text-gray-400">
            Your one-stop destination for modern fashion, accessories,
            and daily essentials. Shop smart, shop easy.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">
               Contact
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-white transition">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition">
               Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
           
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Returns & Refunds</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>
          <p className="text-sm">📍 Indore, India</p>
          <p className="text-sm mt-2">📧 support@ecomzy.com</p>
          <p className="text-sm mt-2">📞 +91 9XXXXXXXXX</p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} ECOMZY. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
