import React from "react";

const Reset = () => {
  return (
    <form action="" method="post" className="">
      <h3 className="text-4xl mb-3 text-blue-800 font-bold">Reset Password</h3>
      <h4 className="font-medium text-blue-800 mb-4">
        Eamil verification is done. Please choose another{" "}
        <span className="font-bold"> password.</span>
      </h4>

      <label className="text-sm font-semibold" htmlFor="">
        Password :
      </label>
      <br />
      <input
        type="password"
        className="rounded shadow-md text-sm p-2 w-full mb-3"
        placeholder="***********"
      />
      <br />

      <label className="text-sm font-semibold" htmlFor="">
        Confirm Password :
      </label>
      <br />
      <input
        type="password"
        className="rounded shadow-md text-sm p-2 w-full mb-3"
        placeholder="***********"
      />
      <br />

      <input
        className="text-white w-full bg-blue-800 py-3 px-4 rounded mt-10"
        type="submit"
        value="Reset Password"
      />
      <p className="text-sm">
        Go back to <span className="font-semibold"> Login</span>
      </p>
    </form>
  );
};

export default Reset;
