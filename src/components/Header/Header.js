import React from "react";
import { ReactComponent as Menu } from "../../assets/menu.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Search } from "../../assets/search.svg";

function Header({ toggleSidebar }) {
  return (
    <header className="flex items-center py-3 px-3 z-10 shadow">
      <Menu className="w-8 h-8 opacity-75" onClick={toggleSidebar} />
      <Logo className="w-24 h-8 mx-4" />
      <div className="flex justify-center md:flex-1">
        <input
          type="text"
          placeholder="Search"
          className="border border-grey px-3 py-2 w-2/3 outline-none rounded-l"
        />
        <button className="bg-gray-100 px-6 border border-gray border-l-0 rounded-r focus:outline-none hover:bg-gray-200">
          <Search className="w-5" />
        </button>
      </div>
      <div className="hidden md:block">
        <span className="block rounded-full bg-gray-500 w-8 h-8"></span>
      </div>
    </header>
  );
}

export default Header;
