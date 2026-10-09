import { useRef, useState } from "react";
import Validation from "../Utils/Validation";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../Utils/Firebase";
import { log } from "firebase/firestore/pipelines";
import { backgroundImageNetflix } from "../Utils/constants";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtoClick = () => {
    console.log("buttonclicked");

    const message = Validation(
      name?.current?.value,
      email?.current?.value,
      password?.current?.value,
    );
    setErrorMessage(message);
    console.log("Validation result:", message);

    if (message) return;

    if (!isSignIn) {
      // Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Signed up:", user);

          // ✅ Update profile with name
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {})
            .catch((error) => {
              console.error("Error updating profile:", error);
            });
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {})
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageNetflix})` }}
    >
      <Header />
      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="z-10 w-4/12 bg-black p-6 rounded shadow text-center text-white bg-opacity-70"
        >
          <h1 className="pb-6 font-bold text-3xl text-start">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="text-white p-2 border rounded w-full mb-4 bg-zinc-800"
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="text-white p-2 border rounded w-full mb-4 bg-zinc-800"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="text-white p-2 border rounded w-full mb-4 bg-zinc-800"
          />

          {errorMessage && (
            <p className="text-red-500 text-sm text-start">{errorMessage}</p>
          )}

          <button
            type="button"
            onClick={handleButtoClick}
            className="bg-red-600 text-white px-4 py-2 rounded w-full mt-6"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="text-xs pt-2 text-start cursor-pointer text-blue-200"
            onClick={toggleSignIn}
          >
            {isSignIn
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
