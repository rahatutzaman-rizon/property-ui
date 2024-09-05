
import React, { useEffect, useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import auth from "../firebase/config";


const SignUpForm = ({ setToggleSignIn }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, errorProfile] = useUpdateProfile(auth);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // await createUserWithEmailAndPassword(email, password);
      await createUserWithEmailAndPassword(email, password).then((data) => {
        console.log("1.new user sign up done", data);
        if (data.user) {
          // এখানে আমরা user এর ইনফরমেশন গুলোকে backend এ save করব একটা common function বানাব যাতে সেটাকে আমরা login with fb/github/email-pass সবজ্যগায়ি use করতে পারি
        //   authenticateNAccessToken(data.user);
        }
      });
      await updateProfile({ displayName: username }).then((data) => {
        console.log("user name upadated", data);
      });
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  // If user is created successfully, console log the user and redirect
  useEffect(() => {
    if (user) {
      router.replace("/login");
    }
  }, [user]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="relative flex items-center mt-8">
          <span className="absolute">{/* SVG for username */}</span>
          <input
            type="text"
            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="relative flex items-center mt-6">
          <span className="absolute">{/* SVG for email */}</span>
          <input
            type="email"
            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="relative flex items-center mt-4">
          <span className="absolute">{/* SVG for password */}</span>
          <input
            type="password"
            className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="relative flex items-center mt-4">
          <span className="absolute">{/* SVG for confirm password */}</span>
          <input
            type="password"
            className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

          {error && <p className="mt-2 text-red-500">{error.message}</p>}

          <div className="mt-6 text-center">
            <span
              onClick={() => setToggleSignIn(true)}
              className="text-sm text-blue-500 hover:underline dark:text-blue-400 cursor-pointer"
            >
              Already have an account?
            </span>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;

