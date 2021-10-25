import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Content from "../../components/Content/Content";

const HomeScreen = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <Header toggleSidebar={() => setSidebar((value) => !value)} />
      <main className="flex">
        <Sidebar sidebar={sidebar} closeSidebar={() => setSidebar(false)} />
        <Content />
      </main>
    </>
  );
};

export default HomeScreen;
