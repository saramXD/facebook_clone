import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";

function App() {
  return (
    <div>
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />

        {/* Widgets*/}
      </div>
    </div>
  );
}

export default App;
