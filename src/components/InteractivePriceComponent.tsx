import { useState } from "react";

const pageViews = [
  { views: "10k", price: 8 },
  { views: "50k", price: 10 },
  { views: "100k", price: 12 },
  { views: "500k", price: 18 },
  { views: "1M", price: 24 },
];

export default function InteractivePriceComponent() {
  const [slider, setSlider] = useState(2); // default 100k
  const [yearly, setYearly] = useState(false);

  const price = yearly
    ? (pageViews[slider].price * 12 * 0.75).toFixed(2)
    : pageViews[slider].price.toFixed(2);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
      <span className="uppercase tracking-widest text-gray-500 text-sm mb-6">
        {pageViews[slider].views} PAGEVIEWS
      </span>
      <input
        type="range"
        min="0"
        max="4"
        value={slider}
        onChange={(e) => setSlider(Number(e.target.value))}
        className="w-full accent-teal-400 mb-6"
      />
      <div className="flex items-center mb-6">
        <span className="text-4xl font-bold text-gray-800">${price}</span>
        <span className="text-gray-500 ml-2">/month</span>
      </div>
      <div className="flex items-center mb-8">
        <span className="text-gray-500 mr-2">Monthly Billing</span>
        <button
          className={`relative w-12 h-6 rounded-full transition-colors duration-200 focus:outline-none ${
            yearly ? "bg-teal-400" : "bg-gray-300"
          }`}
          onClick={() => setYearly((y) => !y)}
        >
          <span
            className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${
              yearly ? "translate-x-6" : ""
            }`}
          />
        </button>
        <span className="text-gray-500 ml-2">Yearly Billing</span>
        <span className="ml-2 text-xs bg-red-100 text-red-500 px-2 py-0.5 rounded">
          -25%
        </span>
      </div>
      <ul className="mb-8 space-y-2 text-gray-700">
        <li className="flex items-center">
          <span className="text-teal-500 mr-2">✔</span> Unlimited websites
        </li>
        <li className="flex items-center">
          <span className="text-teal-500 mr-2">✔</span> 100% data ownership
        </li>
        <li className="flex items-center">
          <span className="text-teal-500 mr-2">✔</span> Email reports
        </li>
      </ul>
      <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-teal-500 transition-colors">
        Start my trial
      </button>
    </div>
  );
}