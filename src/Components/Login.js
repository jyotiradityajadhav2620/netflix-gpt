import React, { useState } from "react";
import Header from "./Header";
import { Form } from "react-router-dom";
import { Typography } from "@mui/material";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
    console.log(isSignIn);
  };
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/ea534f76-b87f-4720-9605-cb29cfd9fefe/web/IN-en-20260810-TRIFECTA-perspective_5a83c581-2878-466b-87a0-19d0bf50f4bc_large.jpg')",
      }}
    >
      <Header />
      <div className="flex items-center justify-center min-h-screen">
        <form className="z-10 w-4/12 bg-black p-6 rounded shadow text-center text-white bg-opacity-70">
          <h1 className="pb-6 font-bold text-3xl text-start">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="text-white p-2 border rounded w-full mb-4 bg-zinc-800"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="text-white p-2 border rounded w-full mb-4 bg-zinc-800"
          />
          <input
            type="password"
            placeholder="Password"
            className="text-white p-2 border rounded w-full mb-4 bg-zinc-800"
          />
          <button className="bg-red-600 text-white px-4 py-2 rounded w-full mt-6">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-xs pt-2 text-start cursor-pointer text-blue-200"
            onClick={toggleSignIn}
          >
            {isSignIn
              ? "New to Netflix? Sign Up Now"
              : "Alredy registered? Sign In Now "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
