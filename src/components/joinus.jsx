import React from "react";

const Joinus = () => {
  return (
    <form action="" method="post" className="">
      <h3 className="text-4xl mb-1 text-blue-800 font-bold">Join us today</h3>
      <h4 className="font-semibold text-blue-800 mb-1">
        Sign up Today to Start Your{" "}
        <span className="font-bold">Job Search!</span>
      </h4>
      <div className="w-20 h-[0.1rem] bg-blue-600 mb-6"></div>

      <label className="text-sm font-semibold text-gray-900" htmlFor="">
        First & Last Name :
      </label>
      <br />
      <input
        type="text"
        className="rounded-xl shadow-xl border-[0.1rem] border-gray-100 text-sm p-3 w-full mb-3"
        placeholder="i.e Joy Logan"
      />
      <br />

      <label className="text-sm font-semibold text-gray-900" htmlFor="">
        E-mail Address :
      </label>
      <br />
      <input
        type="email"
        className="rounded-xl shadow-xl border-[0.1rem] border-gray-100 text-sm p-3 mb-3 w-full"
        placeholder="joy@gmail.com"
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

      <label className="text-sm font-semibold text-gray-900" htmlFor="">
        Phone Number :
      </label>
      <br />
      <input
        type="text"
        className="rounded-xl shadow-xl border-[0.1rem] border-gray-100 text-sm p-3 w-full mb-3"
        placeholder="+91-xxxxxxxxx"
      />
      <br />

      <div className="mt-6 mb-2 flex justify-start items-center gap-3">
        <input type="checkbox" />
        <label className="text-sm font-medium text-gray-900" htmlFor="">
          I agree to the <span className="font-bold">Terms and Conditions</span>{" "}
          & Privacy Policy
        </label>
        <br />
      </div>

      <input
        className="text-white bg-blue-800 w-full py-2 px-4 rounded"
        type="submit"
        value="Create Account"
      />
    </form>
  );
};

export default Joinus;
