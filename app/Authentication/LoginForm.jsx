
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import auth from "../firebase/config";
import { useRouter } from "next/router";



const LoginForm = ({ setToggleSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [signInWithEmailAndPassword, user, loading, firebaseError] =
    useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(email, password).then((data) => {
        if (data?.user) {
          console.log("1.sign in done", data.user);
          // এখানে আমরা user এর ইনফরমেশন গুলোকে backend এ save করব একটা common function বানাব যাতে সেটাকে আমরা login with fb/github/email-pass সবজ্যগায়ি use করতে পারি
        //   authenticateNAccessToken(data.user);
        }
      });

      // if (user) {
      //   router.replace("/");
      // }
    } catch (err) {
      console.error("Login error:", err);
      setError(err.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Email Field */}
        <div className="relative flex items-center mt-6">
          <span className="absolute">
            <AiOutlineMail className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Email address"
            required
          />
        </div>

        {/* Password Field */}
        <div className="relative flex items-center mt-4">
          <span className="absolute">
            <AiOutlineLock className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" />
          </span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Password"
            required
          />
        </div>

        {/* Error Message */}
        {error || firebaseError ? (
          <p className="mt-4 text-sm text-red-500">
            {error || firebaseError.message}
          </p>
        ) : null}

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            disabled={loading}
            className={`w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          {/* Toggle to Sign Up */}
          <div className="mt-6 text-center">
            <span
              onClick={() => setToggleSignIn(false)}
              className="text-sm text-blue-500 hover:underline dark:text-blue-400 cursor-pointer"
            >
              Not have an account? Sign Up now
            </span>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
