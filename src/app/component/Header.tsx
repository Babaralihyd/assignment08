import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white sticky top-0 w-full z-10">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold"> Imran Market Store</h1>
        <nav>
          <ul className="flex space-x-6 md:space-x-10">
            <li><a href="/" className="hover:text-red-600">Home</a></li>
            <li><a href="/about" className="hover:text-orange-700">About</a></li>
            <li><a href="/contact" className="hover:text-purple-700">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header
