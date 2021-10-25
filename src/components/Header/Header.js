import React from "react";
import { ReactComponent as Menu } from "../../assets/menu.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Search } from "../../assets/search.svg";

function Header({ toggleSidebar }) {
  return (
    <header className="z-10 flex items-center px-3 py-3 shadow">
      <Menu className="w-8 h-8 opacity-75" onClick={toggleSidebar} />
      <Logo className="w-24 h-8 mx-4" />
      <div className="flex justify-center md:flex-1">
        <input
          type="text"
          placeholder="Search"
          className="w-2/3 px-3 py-2 border rounded-l outline-none border-grey"
        />
        <button className="px-6 bg-gray-100 border border-l-0 rounded-r border-gray focus:outline-none hover:bg-gray-200">
          <Search className="w-5" />
        </button>
      </div>
      <div className="hidden md:block">
        <span className="block w-10 h-10 bg-gray-500 rounded-full"></span>
      </div>
    </header>
  );
}

export default Header;
