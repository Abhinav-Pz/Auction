import React, { useState } from "react";
import { GiSteeringWheel } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenuUnfoldFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BsAlphabetUppercase } from "react-icons/bs";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };
  return (
    <header className=" fixed w-full z-10 bg-violet-500 text-white py-4">
      {/* desktop navigation section  */}
      <nav className=" container flex justify-between items-center">
        <div className=" flex items-center gap-2">
          <div className="logo">G</div>
          <Link to="/" className=" font-bold text-2xl">
          GirGir Auction
          </Link>
        </div>
        <div >
          <input className="p-2 " type="text" placeholder="Search for Inventory, Aution, Dealers, more..." />
          <button className="btn bg-black text-white p-2 ">search</button>
        </div>

        <div className=" hidden md:flex items-center gap-8 font-medium text-xl">
          <Link
            to="/"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
           English
          </Link>
          <Link
            to="/about"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
            currency
          </Link>
          <Link
            to="/cars"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
            Location
          </Link>
          <Link
            to="/services"
            className=" hover:text-primary transition duration-200 ease-linear"
          >
            Sign Up
          </Link>

          <button className=" hidden lg:flex border-2 border-primary text-lg px-4 rounded-md hover:bg-primary transition duration-200 ease-linear">
            Sign In
          </button>
        </div>

        <div className=" md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <RiMenuUnfoldFill size={25} onClick={handleChange} />
          )}
        </div>
      </nav>

      {/* responsive section  */}
      <div
        className={`${menu ? "translate-x-0" : "-translate-x-full"}
       md:hidden flex flex-col absolute bg-secondary text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit rounded-br-xl transition-transform duration-300`}
      >
        <Link
          to="/"
          className=" hover:text-primary transition duration-200 ease-linear"
        >
          english
        </Link>
        <Link
          to="/about"
          className=" hover:text-primary transition duration-200 ease-linear"
        >
          currency
        </Link>
        <Link
          to="/cars"
          className=" hover:text-primary transition duration-200 ease-linear"
        >
          location
        </Link>
        <Link
          to="/services"
          className=" hover:text-primary transition duration-200 ease-linear"
        >
          Sign up
        </Link>

        <div>
          <button className="border-2 border-primary py-1 px-4 rounded-md">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
