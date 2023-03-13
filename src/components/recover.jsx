import React from "react";
import { Link } from "react-router-dom";

const Recover = () => {
  return (
    <form action="" method="post">
      <h3 className="text-4xl mb-3 text-blue-800 font-bold">
        Recover password
      </h3>
      <h4 className="font-medium text-blue-800 mb-1">
        We'll e-mail you instruction on how to reset your
        <span className="font-bold"> password.</span>
      </h4>
      <div className="w-20 h-[0.1rem] bg-blue-600 mb-6"></div>

      <label className="text-sm font-medium" htmlFor="">
        Email Address :
      </label>
      <br />
      <input
        type="email"
        className="rounded-xl shadow-xl border-[0.1rem] border-gray-100 text-sm p-3 mb-3 w-full"
        placeholder="joy@gmail.com"
      />
      <br />

      <input
        type="submit"
        value="Reset Password"
        className="text-white w-full bg-blue-800 py-2 px-4 rounded mt-10"
      />
      <p className="text-sm mt-2">
        Go back to
        <span className="font-semibold"> Login</span>
      </p>
    </form>
  );
};

export default Recover;
