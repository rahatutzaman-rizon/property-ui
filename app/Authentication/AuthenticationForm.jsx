"use client";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import SocailLoginBtn from "./GoogleSignUp";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/config";

const AuthenticationForm = () => {
  const [toggleSignIn, setToggleSignIn] = useState(true);
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  if (user) {
      router.push("/")
  }
  if (loading) {
    return <div>Loading ...</div>
  }
  return (
    <>
      {/* <form className="w-full max-w-md"> */}
      <section className="w-full max-w-md">
        <div className="flex justify-center mx-auto">
          <img
            className="w-auto h-7 sm:h-8"
            src="https://jmc.tours/wp-content/uploads/2021/08/jmc-tours-logo.png"
            alt=""
          />
        </div>

        <div className="flex items-center justify-center mt-6">
          <span
            onClick={() => setToggleSignIn(true)}
            className={`cursor-pointer w-1/3 pb-4 font-medium text-center capitalize ${
              toggleSignIn
                ? "text-gray-800 border-blue-500  border-b-2  dark:border-blue-400 dark:text-white"
                : "text-gray-500  border-b dark:border-gray-400 dark:text-gray-300"
            }     `}
          >
            sign in
          </span>

          <span
            onClick={() => setToggleSignIn(false)}
            className={`cursor-pointer w-1/3 pb-4 font-medium text-center capitalize ${
              !toggleSignIn
                ? "text-gray-800 border-blue-500  border-b-2  dark:border-blue-400 dark:text-white"
                : "text-gray-500  border-b dark:border-gray-400 dark:text-gray-300"
            }     `}
          >
            sign up
          </span>
        </div>

        <SocailLoginBtn />
        {toggleSignIn ? (
          <LoginForm setToggleSignIn={setToggleSignIn} />
        ) : (
          <SignUpForm setToggleSignIn={setToggleSignIn} />
        )}
      </section>
    </>
  );
};

export default AuthenticationForm;
