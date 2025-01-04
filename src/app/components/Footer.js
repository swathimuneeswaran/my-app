// components/Footer.js

export default function Footer() {
  return (
    <footer className="bg-white text-white py-8">
      <div className="bg-black text-white text-center py-6 shadow-lg mb-8">
        <h1 className="text-xl font-semibold">
          Looking to save now or stay in the loop later? Create a FREE account
          today!
          <a
            href="#"
            className="text-indigo-400 hover:text-indigo-500 font-bold"
          >
            Sign Up
          </a>
        </h1>
      </div>

      <div className="container mx-auto px-4 w-[80%] text-[13px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-[14px] mb-4 text-gray-800">
              Customer Service
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-500 transition duration-200"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-500 transition duration-200"
                >
                  Order Status
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-500 transition duration-200"
                >
                  Returns & Replacements
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-500 transition duration-200"
                >
                  Accessibility
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-500 transition duration-200"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-[14px] mb-4 text-gray-800">
              Shopping
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-500 transition duration-200"
                >
                  On Sale Items
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-500 transition duration-200"
                >
                  Our Brands
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-500 transition duration-200"
                >
                  Trade Customers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-500 transition duration-200"
                >
                  View Your Cart
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-[14px] mb-4 text-gray-800">
              Company Info
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-500 transition duration-200"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-500 transition duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-500 transition duration-200"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-[14px] mb-4 text-gray-800">
              Customer Support
            </h3>
            <h3 className="font-semibold text-[14px] mb-4 text-gray-800">
              Already Order?
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-500 transition duration-200"
                >
                  File a Return or Replacement
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-500 transition duration-200"
                >
                  View Your Order Status
                </a>
              </li>
            </ul>
            <div className="space-y-4">
              <h3 className="font-semibold text-[14px] mb-4 text-gray-800">
                Ready to Order?
              </h3>
              <p className="text-gray-600">Talk with our Sales Associate</p>
              <p className="text-gray-600">
                Monday - Friday: 6:00 a.m. to 4:00 p.m. PST
              </p>
              <p className="text-gray-600">
                Saturday & Sunday: Online Chat 6:00 a.m. to 3:00 p.m. PST
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
