import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <form action="" method="post">
      <h3 className="text-4xl mb-3 text-blue-800 font-bold">
        Welcome at Heleum
      </h3>
      <h4 className="font-medium text-blue-800 mb-2">
        Login with your credential and start your Journey with Heleum
        <span className="font-bold"> Job Search!</span>
      </h4>
      <div className="w-20 h-[0.1rem] bg-blue-800 mb-6"></div>

      <label className="text-sm font-semibold text-gray-900" htmlFor="">
        Email Address :
      </label>
      <br />
      <input
        type="text"
        className="rounded-xl shadow-xl border-[0.1rem] border-gray-100 text-sm p-3 w-full mb-3"
        placeholder="i.e Joy Logan"
      />
      <br />

      <label className="text-sm font-semibold text-gray-900" htmlFor="">
        Password :
      </label>
      <br />
      <input
        type="password"
        className="rounded-xl shadow-xl border-[0.1rem] border-gray-100 text-sm p-3 w-full mb-3"
        placeholder="*********"
      />
      <br />

      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <input type="checkbox" />
          <label className="text-sm font-semibold text-gray-900" htmlFor="">
            Remember Me
          </label>
        </div>

        <Link>Forgot Password?</Link>
      </div>

      <input
        type="submit"
        value="Login"
        className="text-white w-full bg-blue-800 py-2 px-4 rounded mt-6"
      />
      <p className="text-sm mt-2">
        Don't you have an account?{" "}
        <span className="font-semibold">Create an account</span>
      </p>
    </form>
  );
};

export default Welcome;
