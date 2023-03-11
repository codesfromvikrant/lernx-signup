import React from "react";
import { Link } from "react-router-dom";

const Recover = () => {
  return (
    <form action="" method="post">
      <h3 className="text-4xl mb-3 text-blue-800 font-bold">
        Recover password
      </h3>
      <h4 className="font-medium text-blue-800 mb-4">
        We'll e-mail you instruction on how to reset your
        <span className="font-bold"> passwword.</span>
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

      <input
        type="submit"
        value="Reset Password"
        className="text-white w-full bg-blue-800 py-2 px-4 rounded mt-10"
      />
      <p className="text-sm">
        Go back to
        <span className="font-semibold"> Login</span>
      </p>
    </form>
  );
};

export default Recover;
