import { FaHandsHelping } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-700 to-green-600 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-full">
            <FaHandsHelping className="text-blue-700 text-2xl" />
          </div>

          <div>
            <h1 className="text-white text-xl font-bold">
              Sibel Welfare
            </h1>

            <p className="text-gray-200 text-sm">
              AI Chatbot
            </p>
          </div>
        </div>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li className="hover:text-yellow-300 cursor-pointer">
            Home
          </li>

          <li className="hover:text-yellow-300 cursor-pointer">
            About
          </li>

          <li className="hover:text-yellow-300 cursor-pointer">
            Services
          </li>

          <li className="hover:text-yellow-300 cursor-pointer">
            Contact
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;