import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-start gap-3 bg-yellow-300 py-4 fixed w-full px-4 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-lg">
      <Link className="hover:text-blue-500" to="/">
        Home
      </Link>
      <Link className="hover:text-blue-500" to="/about">
        About
      </Link>
      {/* <Link className="hover:text-blue-500" to="/skill">
        Skills
      </Link> */}
      <Link className="hover:text-blue-500" to="/service">
        Service
      </Link>
      <Link className="hover:text-blue-500" to="/contact">
        Contact
      </Link>
    </nav>
  );
};

export default Navbar;