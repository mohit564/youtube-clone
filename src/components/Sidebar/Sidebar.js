import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as AiFill from "react-icons/ai";
import * as Md from "react-icons/md";

import { closeSidebar } from "../../redux/actions/sidebar.action";
import { logout } from "../../redux/actions/auth.action";

function Sidebar() {
  const sidebar = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className={sidebar ? "m-4 h-screen sticky z-40 top-20" : "hidden"}>
      <ul className="flex flex-col items-start justify-center bg-white gap-y-2">
        <li
          className="flex items-center w-full px-6 py-2 hover:bg-gray-200"
          onClick={() => dispatch(closeSidebar())}
        >
          <AiFill.AiFillHome className="mr-4" size={22} />
          <p className="text-md">Home</p>
        </li>
        <li
          className="flex items-center w-full px-6 py-2 hover:bg-gray-200"
          onClick={() => dispatch(closeSidebar())}
        >
          <Md.MdSubscriptions className="mr-4" size={22} />
          <p className="text-md">Subscriptions</p>
        </li>
        <li
          className="flex items-center w-full px-6 py-2 hover:bg-gray-200"
          onClick={() => dispatch(closeSidebar())}
        >
          <AiFill.AiFillLike className="mr-4" size={22} />
          <p className="text-md">Liked Videos</p>
        </li>
        <li
          className="flex items-center w-full px-6 py-2 hover:bg-gray-200"
          onClick={() => dispatch(closeSidebar())}
        >
          <Md.MdHistory className="mr-4" size={22} />
          <p className="text-md">History</p>
        </li>
        <li
          className="flex items-center w-full px-6 py-2 hover:bg-gray-200"
          onClick={() => dispatch(closeSidebar())}
        >
          <Md.MdOutlineVideoLibrary className="mr-4" size={22} />
          <p className="text-md">Library</p>
        </li>
        <hr className="w-full" />
        <li
          className="flex items-center w-full px-6 py-2 hover:bg-gray-200"
          onClick={handleLogout}
        >
          <Md.MdLogout className="mr-4" size={22} />
          <p className="text-md">Logout</p>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
