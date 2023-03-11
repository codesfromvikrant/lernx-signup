import React from "react";

const Joinus = () => {
  return (
    <form action="" method="post" className="">
      <h3 className="text-4xl mb-3 text-blue-800 font-bold">Join us today</h3>
      <h4 className="font-medium text-blue-800 mb-4">
        Sign up Today to Start Your{" "}
        <span className="font-bold">Job Search!</span>
      </h4>

      <label className="text-sm font-semibold" htmlFor="">
        First & Last Name :
      </label>
      <br />
      <input
        type="text"
        className="rounded shadow-md text-sm p-2 w-full mb-3"
        placeholder="i.e Joy Logan"
      />
      <br />

      <label className="text-sm font-semibold" htmlFor="">
        E-mail Address :
      </label>
      <br />
      <input
        type="text"
        className="rounded shadow-md text-sm p-2 w-full mb-3"
        placeholder="i.e Joy Logan"
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

      <label className="text-sm font-semibold" htmlFor="">
        Phone Number :
      </label>
      <br />
      <input
        type="text"
        className="rounded shadow-md text-sm p-2 w-full mb-3"
        placeholder="+91-xxxxxxxxx"
      />
      <br />

      <input type="checkbox" />
      <label className="text-sm font-semibold" htmlFor="">
        I agree to the Terms and Conditions & Privacy Policy
      </label>
      <br />

      <input
        className="text-white bg-blue-800 py-2 px-4 rounded mt-6"
        type="submit"
        value="Create Account"
      />
    </form>
  );
};

export default Joinus;
