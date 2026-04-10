import React from "react";
import { useNavigate } from "react-router-dom";
import { Routers } from "../../constant/router";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-[#111] border border-gray-800 rounded-2xl p-8 shadow-lg">
        
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Create <i>Account!</i>
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Please register to continue
        </p>

        <form className="space-y-5">
          <div>
            <label className="text-sm text-gray-400">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full mt-2 px-4 py-3 bg-black border border-gray-900 rounded-lg text-white focus:outline-none focus:border-lime-400 transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-3 bg-black border border-gray-900 rounded-lg text-white focus:outline-none focus:border-lime-400 transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Phone Number</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="w-full mt-2 px-4 py-3 bg-black border border-gray-900 rounded-lg text-white focus:outline-none focus:border-lime-400 transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Password</label>
            <input
              type="password"
              placeholder="Create password"
              className="w-full mt-2 px-4 py-3 bg-black border border-gray-900 rounded-lg text-white focus:outline-none focus:border-lime-400 transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full mt-2 px-4 py-3 bg-black border border-gray-900 rounded-lg text-white focus:outline-none focus:border-lime-400 transition"
            />
          </div>

          <div className="w-50 justify-self-center-safe">
            <button
              type="submit"
              className="w-full bg-lime-400 text-black py-3 rounded-lg font-semibold hover:bg-lime-300 transition"
            >
              Register
            </button>
          </div>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate(Routers.LOGIN)}
            className="text-lime-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;