import React, { useRef, useState } from "react";
import { FaBars, FaListUl, FaTimes } from "react-icons/fa";
import MinNavItems from "./min-nav-items";
export default function MiniScrNavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<any>();
  const openMenu = () => {
    setShowMenu(true);
    if (menuRef.current) {
      menuRef.current.classList.remove("translate-x-96");
      menuRef.current.classList.add("-translate-x-96");
    }
  };
  const closeMenu = () => {
    setShowMenu(false);
    if (menuRef.current) {
      menuRef.current.classList.add("translate-x-96");

      menuRef.current.classList.remove("-translate-x-96");
    }
  };

  return (
    <>
      <div
        className=" fixed top-3 right-4 z-40 h-12 w-12 bg-slate-900 rounded-full flex justify-center items-center border border-prime_gray cursor-pointer "
        onClick={() => openMenu()}
      >
        <FaListUl className=" text-prime_gray " size={20} />
      </div>

      <div
        className={` ${
          showMenu ? "block" : "hidden"
        } fixed top-0 left-0 w-screen h-screen bg-black opacity-30`}
        onClick={() => closeMenu()}
      />
      <div
        ref={menuRef}
        className=" fixed top-0 -right-96 z-50 translate-x-96 w-5/6 sm:w-96 h-screen bg-[#14151a] transition-all duration-500 ease-linear "
      >
        <div
          className=" absolute top-4 left-4  h-12 w-12  rounded-full flex justify-center items-center cursor-pointer "
          onClick={() => closeMenu()}
        >
          <FaTimes className=" text-prime_gray " size={20} />
        </div>
        <MinNavItems />
      </div>
    </>
  );
}
