// Header.js
import React, { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white p-4 mb-4">
      <div className="container mx-auto flex justify-between items-center">
        <li className="text-xl font-bold list-none">MoviesWeb</li>

        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsNavOpen(!isNavOpen)}
        ></button>

        <nav className={`lg:flex space-x-4 ${isNavOpen ? "block" : "hidden"}`}>
          <li className="hover:text-blue-500  list-none ">Home</li>
          <li className="hover:text-blue-500  list-none">Movies</li>
          <li className="hover:text-blue-500  list-none">TV Shows</li>
          <li className="hover:text-blue-500  list-none">Favorites</li>
        </nav>
      </div>
    </header>
  );
};

export default Header;
