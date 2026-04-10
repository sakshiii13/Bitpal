import React from "react";
import { User } from "lucide-react";

const UserProfile = () => {
  return (
    <div className="min-h-screen bg-[#05050d] p-6 text-white">
      <div className="relative mx-auto max-w-7xl">
        <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-lime-400/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl"></div>

        <div className="relative z-10 mb-8">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold tracking-tight">User Profile</h1>
            <div className="h-8 w-[2px] bg-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.8)]"></div>
          </div>
          <p className="mt-2 text-white/50">Manage your account details</p>
        </div>

        <div className="relative z-10 overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#161922] via-[#11131a] to-[#0b0d12] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
          <div className="absolute inset-0 rounded-[28px] ring-1 ring-white/5"></div>

          <div className="relative z-10">
            <div className="mb-8 flex flex-col gap-5 rounded-[24px] border border-white/10 bg-white/[0.03] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 shadow-[0_10px_30px_rgba(34,211,238,0.12)]">
                  <User size={28} className="text-cyan-400" />
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-white">Sakshi</h2>
                  <p className="mt-1 text-sm text-white/50">
                    Frontend Developer
                  </p>
                </div>
              </div>

              <span className="inline-flex w-fit items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                Active Profile
              </span>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                <label className="text-sm text-white/50">Full Name</label>
                <input
                  type="text"
                  defaultValue="Sakshi"
                  className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-[#0d1118] px-4 text-white outline-none transition placeholder:text-white/30 focus:border-lime-400 focus:shadow-[0_0_0_3px_rgba(163,230,53,0.12)]"
                />
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                <label className="text-sm text-white/50">Email</label>
                <input
                  type="email"
                  defaultValue="sakshi@gmail.com"
                  className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-[#0d1118] px-4 text-white outline-none transition placeholder:text-white/30 focus:border-lime-400 focus:shadow-[0_0_0_3px_rgba(163,230,53,0.12)]"
                />
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                <label className="text-sm text-white/50">Phone</label>
                <input
                  type="text"
                  defaultValue="9876543210"
                  className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-[#0d1118] px-4 text-white outline-none transition placeholder:text-white/30 focus:border-lime-400 focus:shadow-[0_0_0_3px_rgba(163,230,53,0.12)]"
                />
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                <label className="text-sm text-white/50">Role</label>
                <input
                  type="text"
                  defaultValue="User"
                  disabled
                  className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-[#0d1118] px-4 text-white/50 outline-none"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-2xl border border-lime-300/20 bg-lime-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_25px_rgba(163,230,53,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-lime-300">
                Update Profile
              </button>

              <button className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-white/10">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;