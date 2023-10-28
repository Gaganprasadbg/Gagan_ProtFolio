import React from "react";
import Header from "../Header";

const Layout = ({ children }: any) => {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ position: "fixed", top: 0, left: 0, right: 0 }}>
        <Header />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
