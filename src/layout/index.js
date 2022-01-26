import React from "react";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar/Navbar";

const AppLayout = (props) => {
  return (
    <>
      <Navbar />
      <div className="app-container">{props.children}</div>
      <Footer />
    </>
  );
};

export default AppLayout;
