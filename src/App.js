import React, { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <Header toggleSidebar={() => setSidebar((value) => !value)} />
      <main className="flex">
        <Sidebar sidebar={sidebar} closeSidebar={() => setSidebar(false)} />
        <section className="flex justify-center items-center bg-gray-100 min-h-screen w-full">
          <h1 className="text-xl">Videos</h1>
        </section>
      </main>
    </>
  );
};

export default App;
