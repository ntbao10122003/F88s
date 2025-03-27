import React from "react";
import { Outlet } from "react-router-dom";

// Partials
import Header from "../partials/Header";
import Footer from "../partials/Footer";

// CSS
import "../../public/frontend/css/utilities.css";
import "../../public/frontend/css/Header.css";
import "../../public/frontend/css/Footer.css";
import "../../public/frontend/css/Home.css";
import "../../public/frontend/css/Profile.css";

const WebsiteLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
