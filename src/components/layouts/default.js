import React from "react";
import Header from "../Header";

const DefaultLayout = ({ children }) => {
  return (
    <div className="container-fluid my-2">
      <Header title="Naga Konada Personal Blog" />
      <main className="">{children}</main>
    </div>
  );
};

export default DefaultLayout;
