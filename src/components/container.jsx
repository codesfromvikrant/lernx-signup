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
    <div className="flex justify-center items-center">
      <div
        style={style}
        className=" w-1/2 md:block hidden h-[100vh] shadow-xl"
      ></div>

      <div className="w-1/2 px-16">
        <Outlet />
      </div>
    </div>
  );
};

export default Container;
