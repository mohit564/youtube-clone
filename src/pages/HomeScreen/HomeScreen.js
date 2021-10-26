import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Content from "../../components/Content/Content";

const HomeScreen = () => {
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
        <Content />
      </main>
    </>
  );
};

export default HomeScreen;
