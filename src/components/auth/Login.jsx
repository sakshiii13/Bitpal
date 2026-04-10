import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routers, UserRouters } from "../../constant/router";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.email === "admin@gmail.com" && form.password === "123456") {
      sessionStorage.setItem("isLogin", "true");

      alert("✅ Successfully Logged In");

      navigate(UserRouters.DASHBOARD);
    } else {
      alert("❌ Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-[#111] border border-gray-800 rounded-2xl p-8 shadow-lg">

        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Welcome <i>Back!</i>
        </h2>

        <p className="text-gray-400 text-center mb-8">
          Please login to your account
        </p>

        
        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-lime-400 transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full mt-2 px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:border-lime-400 transition"
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-400">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-lime-400" />
              Remember me
            </label>

            <span className="hover:text-lime-400 cursor-pointer">
              Forgot Password?
            </span>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-lime-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-lime-300 transition"
            >
              Login
            </button>
          </div>

        </form>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-[1px] bg-gray-700"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="flex-1 h-[1px] bg-gray-700"></div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-700 py-3 rounded-full text-white hover:bg-gray-800 transition">
            <FaGoogle className="text-gray-500" />
          </button>

          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-700 py-3 rounded-full text-white hover:bg-gray-800 transition">
            <FaFacebookF className="text-gray-500" />
          </button>
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate(Routers.REGISTER)}
            className="text-lime-400 cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;