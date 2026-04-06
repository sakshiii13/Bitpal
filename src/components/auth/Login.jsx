import { useState } from "react";


export default function Login({ onClose }) {
  const [tab, setTab] = useState("login");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70"
      ></div>

      
      <div className="relative w-[350px] bg-white rounded-md overflow-hidden shadow-xl">
        
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl text-gray-600"
        >
          ×
        </button>

        
        <div className="flex">
          <button
            onClick={() => setTab("login")}
            className={`w-1/2 py-3 text-sm font-semibold ${
              tab === "login"
                ? "bg-lime-400 text-black"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            LOGIN
          </button>

          <button
            onClick={() => setTab("register")}
            className={`w-1/2 py-3 text-sm font-semibold ${
              tab === "register"
                ? "bg-lime-400 text-black"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            REGISTER
          </button>
        </div>

       
        <div className="p-6">
          {tab === "login" ? (
            <div className="flex flex-col gap-4">
              <input placeholder="User Name" className="border border-gray-300 p-2 rounded hover:border-lime-300 hover:shadow mb-3" />
              <input type="password" placeholder="Password" className="border border-gray-300 p-2 rounded hover:border-lime-300 hover:shadow mb-3" />

              <label className="text-sm flex items-center gap-2">
                <input type="checkbox" /> Remember me
              </label>

              <p className="text-xs text-gray-500 cursor-pointer">
                Lost your password?
              </p>

              <button className="bg-lime-400 py-2 rounded-full font-semibold">
                LOGIN
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <input placeholder="User Name" className="border border-gray-300 p-2 rounded hover:border-lime-300 hover:shadow mb-3" />
              <input type="email" placeholder="Email" className="border border-gray-300 p-2 rounded hover:border-lime-300 hover:shadow mb-3" />
              <input type="password" placeholder="Password" className="border border-gray-300 p-2 rounded hover:border-lime-300 hover:shadow mb-3" />

              <button className="bg-lime-400 py-2 rounded-full font-semibold">
                REGISTER
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}