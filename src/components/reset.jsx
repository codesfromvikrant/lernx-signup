import React from "react";

const Reset = () => {
  return (
    <form action="" method="post" className="">
      <h3 className="text-4xl mb-3 text-blue-800 font-bold">Reset Password</h3>
      <h4 className="font-medium text-blue-800 mb-1">
        Eamil verification is done. Please choose another{" "}
        <span className="font-bold"> password.</span>
      </h4>
      <div className="w-20 h-[0.1rem] bg-blue-600 mb-6"></div>

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

      <label className="text-sm font-semibold text-gray-900" htmlFor="">
        Confirm Password :
      </label>
      <br />
      <input
        type="password"
        className="rounded-xl shadow-xl border-[0.1rem] border-gray-100 text-sm p-3 w-full mb-3"
        placeholder="*********"
      />
      <br />

      <input
        className="text-white w-full bg-blue-800 py-3 px-4 rounded-md mt-10"
        type="submit"
        value="Reset Password"
      />
      <p className="text-sm mt-2">
        Go back to <span className="font-semibold"> Login</span>
      </p>
    </form>
  );
};

export default Reset;
