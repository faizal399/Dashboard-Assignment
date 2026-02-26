import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="w-full h-[8vh] bg-indigo-400 shadow-2xl text-white">
      <div className="flex h-full px-20 font-bold  m-auto justify-between items-center ">
        <h1>My-Dashboard</h1>
        <div className="flex gap-3 justify-between">
          <Link className="hover:text-gray-200 transition" to={"/List"}>
            Employees
          </Link>
          <Link
            onClick={() => {
              localStorage.removeItem("isLoggedIn");
              navigate("/");
            }}
            className="hover:text-gray-200 transition"
            to={"/"}
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
