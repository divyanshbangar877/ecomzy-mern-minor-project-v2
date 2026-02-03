const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About ECOMZY</h1>

      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        ECOMZY is a modern e-commerce web application developed as a minor
        project for academic purposes. The platform allows users to browse
        products, add them to the cart, and place orders easily.
      </p>

      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        This project is built using the MERN stack and focuses on providing a
        smooth user experience, clean interface, and efficient backend
        integration.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
        Project Objectives
      </h2>

      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li>Build a responsive e-commerce platform</li>
        <li>Implement cart and checkout functionality</li>
        <li>Understand frontend–backend communication</li>
        <li>Store order data securely in database</li>
      </ul>
    </div>
  );
};

export default About;
