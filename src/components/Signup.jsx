import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const { session, signUpNewUser } = UserAuth();
  console.log(session);

  return (
    <div>
      <form className="max-w-md m-auto pt-24">
        <h1 className="font-bold pb-2">Sign up Today!</h1>
        <p>
          Already have an account? <Link to={"/signin"}>Sign in!</Link>
        </p>
        <div className="flex flex-col py-4">
          <input placeholder="Email" className="p-3 mt-6 " type="email" />
          <input placeholder="Password" className="p-3 mt-6" type="password" />
          <button type="submit" disabled={loading} className="mt-6 w-full">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
