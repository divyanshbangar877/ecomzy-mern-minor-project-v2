import { useEffect, useState } from "react";

const Invoice = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("invoice");
    if (data) {
      setOrder(JSON.parse(data));
    }
  }, []);

  if (!order) {
    return <div className="p-10">No invoice found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg mt-10">
      
      {/* HEADER */}
      <div className="flex justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-green-600">ECOMZY</h1>
          <p className="text-sm text-gray-500">Invoice</p>
        </div>
        <div className="text-sm">
          <p><b>Order ID:</b> {order._id}</p>
          <p><b>Date:</b> {new Date(order.createdAt).toLocaleDateString()}</p>
        </div>
      </div>

      {/* CUSTOMER */}
      <div className="mb-6">
        <h2 className="font-semibold text-lg">Billed To</h2>
        <p className="text-gray-600">Customer Name</p>
        <p className="text-gray-600">customer@email.com</p>
      </div>

      {/* TABLE */}
      <table className="w-full border-collapse mb-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left">Product</th>
            <th className="border p-2 text-right">Price</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">{item.title}</td>
              <td className="border p-2 text-right">${item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* TOTAL */}
      <div className="flex justify-end text-xl font-bold">
        Total: ${order.totalAmount}
      </div>

      {/* PRINT */}
      <div className="mt-8 text-center">
        <button
          onClick={() => window.print()}
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700"
        >
          Print Invoice
        </button>
      </div>
    </div>
  );
};

export default Invoice;
