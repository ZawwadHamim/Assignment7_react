import React from "react";
import { FaClock, FaHome } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { NavLink } from "react-router";

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors ${
      isActive ? "bg-green-700 text-white" : "text-gray-600 hover:text-green-700"
    }`;

  return (
    <div className="shadow p-2 my-2">
      <nav className="container mx-auto my-4 flex justify-between items-center">
        <div className="font-bold text-xl text-green-900">
          Keen <span className="text-green-700">Keeper</span>
        </div>
        <ul className="flex gap-2">
          <li>
            <NavLink to="/" end className={navLinkClass}>
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/timeline" className={navLinkClass}>
              <FaClock /> Timeline
            </NavLink>
          </li>
          <li>
            <NavLink to="/stats" className={navLinkClass}>
              <GoGraph /> Stats
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;