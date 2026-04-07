import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-[#111] border border-gray-800 rounded-2xl p-8 shadow-lg">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back 👋
        </h2>
        <p className="text-gray-400 text-center mb-8">
          Please login to your account
        </p>

        {/* Form */}
        <form className="space-y-5">
          
          {/* Email */}
          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-lime-400 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-400">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-2 px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-lime-400 transition"
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm text-gray-400">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-lime-400" />
              Remember me
            </label>
            <span className="hover:text-lime-400 cursor-pointer">
              Forgot Password?
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-lime-400 text-black py-3 rounded-lg font-semibold hover:bg-lime-300 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-[1px] bg-gray-700"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-[1px] bg-gray-700"></div>
        </div>

        {/* Social Login */}
        <div className="space-y-3">
          <button className="w-full border border-gray-700 py-3 rounded-lg text-white hover:border-lime-400 transition">
            Continue with Google
          </button>
          <button className="w-full border border-gray-700 py-3 rounded-lg text-white hover:border-lime-400 transition">
            Continue with Facebook
          </button>
        </div>

        {/* Register */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Don’t have an account?{" "}
          <span className="text-lime-400 cursor-pointer hover:underline">
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;