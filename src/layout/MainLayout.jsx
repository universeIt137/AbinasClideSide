import React from "react";
import Header from "../pages/Shared/Header";
import Footer from "../pages/Shared/FooterSection";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      {/* header had been used inside every components */}
      <div className="text-[#0089D0]">
        <Header></Header>
      </div>
      <div className="min-h-content">
      <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
