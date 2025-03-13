import React, { useEffect } from "react";

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Dashboard from "./Dashboard";

import Data from "./Data";

import Edit from "./Edit";
import Login from "./Login";
import Nav from "./components/Nav";
import Private from "./components/Private";

const App = () => {
  const location = useLocation();
  const nav = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      nav("/login");
    }
  }, [token]);

  return (
    <>
        {location.pathname !== "/login" && <Nav />}
      <div className="pt-[10px] pr-[10px] pl-[22%]">
        <Routes>
          <Route element={<Private />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/data" element={<Data />} />
            <Route path="/data/:id" element={<Edit />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
