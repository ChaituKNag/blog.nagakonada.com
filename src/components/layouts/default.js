import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const DefaultLayout = ({ children }) => {
  return (
    <div className="default-root container-fluid d-flex flex-column h-100 position-fixed px-3 px-sm-0">
      <Header title="Naga Konada Personal Blog" />
      <main className="flex-grow-1">{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
