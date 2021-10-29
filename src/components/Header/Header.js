import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { ReactComponent as Menu } from "../../assets/menu.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Search } from "../../assets/search.svg";

import { toggleSidebar } from "../../redux/actions/sidebar.action";

function Header() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/search/${input}`);
  };

  return (
    <header className="sticky top-0 left-0 z-50 flex items-center px-3 py-3 bg-white shadow">
      <Menu
        className="w-8 h-8 opacity-75"
        onClick={() => dispatch(toggleSidebar())}
      />
      <Link to="/">
        <Logo className="w-24 h-8 mx-4" />
      </Link>
      <form onSubmit={handleSubmit} className="flex justify-center md:flex-1">
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(ev) => setInput(ev.target.value)}
          className="w-2/3 px-3 py-2 border rounded-l outline-none border-grey"
        />
        <button className="px-6 bg-gray-100 border border-l-0 rounded-r border-gray focus:outline-none hover:bg-gray-200">
          <Search className="w-5" />
        </button>
      </form>
      {user && (
        <div className="hidden md:block">
          <img
            src={user.avatar}
            alt="avatar"
            className="block w-10 h-10 bg-gray-500 rounded-full"
          />
        </div>
      )}
    </header>
  );
}

export default Header;
