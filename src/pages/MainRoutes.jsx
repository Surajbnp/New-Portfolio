import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import React from "react";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default MainRoutes;
