import React from "react";
import Logo from "../images/Sign-up-page.svg";
import { Outlet } from "react-router-dom";

const Container = () => {
  const style = {
    background: `url(${Logo})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-0 max-w-6xl mx-auto shadow-xl">
      <div style={style} className=" md:block hidden h-full shadow-xl"></div>

      <div className="py-20 lg:px-20 md:px-12 sm:px-20 px-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Container;
