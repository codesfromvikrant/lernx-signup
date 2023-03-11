import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <form action="" method="post">
      <h3 className="text-4xl mb-3 text-blue-800 font-bold">
        Welcome at Heleum
      </h3>
      <h4 className="font-medium text-blue-800 mb-4">
        Login with your credential and start your Journey with Heleum
        <span className="font-bold"> Job Search!</span>
      </h4>

      <label className="text-sm font-semibold" htmlFor="">
        Email Address :
      </label>
      <br />
      <input
        type="email"
        className="rounded shadow-md text-sm p-2 w-full mb-3"
        placeholder="davon@gmail.com"
      />
      <br />

      <label className="text-sm font-semibold" htmlFor="">
        Password :
      </label>
      <br />
      <input
        type="password"
        className="rounded shadow-md text-sm p-2 w-full mb-3"
        placeholder="i.e Joy Logan"
      />
      <br />

      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <input type="checkbox" />
          <label className="text-sm font-semibold" htmlFor="">
            Remember Me
          </label>
        </div>

        <Link>Remember Me</Link>
      </div>

      <input
        type="submit"
        value="Login"
        className="text-white w-full bg-blue-800 py-2 px-4 rounded mt-6"
      />
      <p className="text-sm">
        Don't you have an account?{" "}
        <span className="font-semibold">Create an account</span>
      </p>
    </form>
  );
};

export default Welcome;
