import React from "react";
import * as AiFill from "react-icons/ai";
import * as Md from "react-icons/md";

function Sidebar(props) {
  const { sidebar, closeSidebar } = props;

  return (
    <nav className={sidebar ? "m-4" : "hidden"}>
      <ul className="flex flex-col items-start justify-center gap-y-2">
        <li
          className="flex items-center w-full px-6 py-2 hover:bg-gray-200"
          onClick={closeSidebar}
        >
          <AiFill.AiFillHome className="mr-4" size={22} />
          <p className="text-md">Home</p>
        </li>
        <li
          className="flex items-center w-full px-6 py-2 hover:bg-gray-200"
          onClick={closeSidebar}
        >
          <Md.MdSubscriptions className="mr-4" size={22} />
          <p className="text-md">Subscriptions</p>
        </li>
        <li
          className="flex items-center w-full px-6 py-2 hover:bg-gray-200"
          onClick={closeSidebar}
        >
          <AiFill.AiFillLike className="mr-4" size={22} />
          <p className="text-md">Liked Videos</p>
        </li>
        <li
          className="flex items-center w-full px-6 py-2 hover:bg-gray-200"
          onClick={closeSidebar}
        >
          <Md.MdHistory className="mr-4" size={22} />
          <p className="text-md">History</p>
        </li>
        <li
          className="flex items-center w-full px-6 py-2 hover:bg-gray-200"
          onClick={closeSidebar}
        >
          <Md.MdOutlineVideoLibrary className="mr-4" size={22} />
          <p className="text-md">Library</p>
        </li>
        <hr className="w-full" />
        <li
          className="flex items-center w-full px-6 py-2 hover:bg-gray-200"
          onClick={closeSidebar}
        >
          <Md.MdLogout className="mr-4" size={22} />
          <p className="text-md">Logout</p>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
