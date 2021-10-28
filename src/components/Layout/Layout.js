import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

function Layout({ children }) {
  const { loading, accessToken } = useSelector((state) => state.auth);
  const history = useHistory();

  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("/login");
    }
  }, [loading, accessToken, history]);

  return (
    <>
      <Header />
      <main className="flex">
        <Sidebar />
        {children}
      </main>
    </>
  );
}

export default Layout;
