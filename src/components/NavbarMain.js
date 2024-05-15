import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoMdListBox, IoMdApps, IoMdHome } from "react-icons/io";
import { MdWorkHistory } from "react-icons/md";

import { RiUserFill } from "react-icons/ri";
import { IoHeart, IoLogOut } from "react-icons/io5";
import { SERVER_URL } from "./utilComponents/constant";

const NavItem = ({ icon, to, onClick }) => (
  <li
    className="border border-gray-500 rounded-xl hover:scale-90 cursor-pointer duration-300"
    onClick={onClick}
  >
    <Link to={to} className="flex items-center p-4">
      {icon}
    </Link>
  </li>
);

const NavItemMobile = ({ icon, to, onClick }) => (
  <li
    className=" hover:bg-[#9DB4C0] rounded-xl mt-2 cursor-pointer duration-300 flex items-center justify-center"
    onClick={onClick}
  >
    <Link to={to} className="flex items-center p-4">
      {icon}
    </Link>
  </li>
);

const Navbar = ({ user }) => {
  const [nav, setNav] = useState(false);

  const handleNav = useCallback(() => {
    setNav((prevNav) => !prevNav);
  }, []);

  return (
    <div className="fixed bg-white flex justify-between items-center mx-auto w-full z-10 pr-4 pl-12 border-b">
      <h1 className="pl-4  bg-clip-text text-4xl font-black">
        Car Rental Service
      </h1>
      <ul /**/ className="hidden md:flex gap-2 rounded-xl bg-white m-2">
        <NavItem
          icon={<IoMdHome style={{ color: "black" }} size={20} />}
          to="/"
        />
        {user.role === "ROLE_ADMIN" && (
          <NavItem
            icon={<IoMdListBox style={{ color: "black" }} size={20} />}
            to="/dashboard"
          />
        )}
        {user.role === "ROLE_ADMIN" && (
          <NavItem
            icon={<MdWorkHistory style={{ color: "black" }} size={20} />}
            to="/history"
          />
        )}
        <NavItem
          icon={<IoMdApps style={{ color: "black" }} size={20} />}
          to="/offers"
        />
        <NavItem
          icon={<IoHeart style={{ color: "black" }} size={20} />}
          to="/likes"
        />
        <NavItem
          icon={<RiUserFill style={{ color: "black" }} size={20} />}
          to="/me"
        />
        <NavItem
          icon={<IoLogOut style={{ color: "black" }} size={20} />}
          to={SERVER_URL + "/logout"}
        />
      </ul>
      <div
        onClick={handleNav}
        className="md:hidden z-10 m-2 rounded-xl bg-white border border-gray-500 hover:scale-90 duration-300 p-4"
      >
        {nav ? (
          <AiOutlineClose style={{ color: "black" }} size={20} />
        ) : (
          <AiOutlineMenu style={{ color: "black" }} size={20} />
        )}
      </div>
      <ul
        className={
          nav
            ? "fixed md:hidden left-0 top-0 w-[12%] h-full bg-[#e0fbfc] ease-in-out duration-500 z-10 flex content-center items-center flex-col"
            : "ease-in-out w-[15%] duration-500 fixed top-0 bottom-0 left-[-100%] z-10"
        }
      >
        <NavItemMobile
          icon={<IoMdHome style={{ color: "black" }} size={24} />}
          to="/"
          onClick={handleNav}
        />
        {user.role === "ROLE_ADMIN" && (
          <NavItemMobile
            icon={<IoMdListBox style={{ color: "black" }} size={24} />}
            to="/dashboard"
            onClick={handleNav}
          />
        )}
        {user.role === "ROLE_ADMIN" && (
          <NavItemMobile
            icon={<MdWorkHistory style={{ color: "black" }} size={20} />}
            to="/history"
            onClick={handleNav}
          />
        )}
        <NavItemMobile
          icon={<IoMdApps style={{ color: "black" }} size={24} />}
          to="/offers"
          onClick={handleNav}
        />
        <NavItemMobile
          icon={<IoHeart style={{ color: "black" }} size={24} />}
          to="/likes"
          onClick={handleNav}
        />
        <NavItemMobile
          icon={<RiUserFill style={{ color: "black" }} size={24} />}
          to="/me"
          onClick={handleNav}
        />
        <NavItemMobile
          icon={<IoLogOut style={{ color: "black" }} size={24} />}
          to={SERVER_URL + "/logout"}
          onClick={handleNav}
        />
      </ul>
    </div>
  );
};

export default Navbar;
