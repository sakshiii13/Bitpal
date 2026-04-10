import React from "react";

const UserSetting = () => {
  return (
    <div className="min-h-screen bg-[#05050d] p-6 text-white">
      <div className="relative mx-auto max-w-7xl">
        <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-lime-400/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl"></div>

        <div className="relative z-10 mb-8">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
            <div className="h-8 w-[2px] bg-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.8)]"></div>
          </div>
          <p className="mt-2 text-white/50">
            Manage your account preferences and security
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2 relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#161922] via-[#11131a] to-[#0b0d12] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 rounded-[28px] ring-1 ring-white/5"></div>

            <div className="relative z-10">
              <h2 className="mb-6 text-xl font-semibold text-white">
                Account Settings
              </h2>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                  <label className="text-sm text-white/50">Username</label>
                  <input
                    type="text"
                    defaultValue="sakshi_user"
                    className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-[#0d1118] px-4 text-white outline-none transition placeholder:text-white/30 focus:border-lime-400 focus:shadow-[0_0_0_3px_rgba(163,230,53,0.12)]"
                  />
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                  <label className="text-sm text-white/50">Email Address</label>
                  <input
                    type="email"
                    defaultValue="sakshi@gmail.com"
                    className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-[#0d1118] px-4 text-white outline-none transition placeholder:text-white/30 focus:border-lime-400 focus:shadow-[0_0_0_3px_rgba(163,230,53,0.12)]"
                  />
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                  <label className="text-sm text-white/50">Language</label>
                  <select className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-[#0d1118] px-4 text-white outline-none transition focus:border-lime-400 focus:shadow-[0_0_0_3px_rgba(163,230,53,0.12)]">
                    <option>English</option>
                    <option>Hindi</option>
                  </select>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                  <label className="text-sm text-white/50">Timezone</label>
                  <select className="mt-2 h-12 w-full rounded-xl border border-white/10 bg-[#0d1118] px-4 text-white outline-none transition focus:border-lime-400 focus:shadow-[0_0_0_3px_rgba(163,230,53,0.12)]">
                    <option>Asia/Kolkata</option>
                    <option>UTC</option>
                  </select>
                </div>
              </div>

              <div className="mt-6">
                <button className="rounded-2xl border border-lime-300/20 bg-lime-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_10px_25px_rgba(163,230,53,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-lime-300">
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#161922] via-[#11131a] to-[#0b0d12] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 rounded-[28px] ring-1 ring-white/5"></div>

            <div className="relative z-10">
              <h2 className="mb-6 text-xl font-semibold text-white">Security</h2>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20">
                  <p className="mb-1 text-sm text-white/50">Password</p>
                  <h3 className="font-medium">••••••••••</h3>
                  <button className="mt-3 text-sm font-medium text-cyan-400 transition hover:text-cyan-300">
                    Change Password
                  </button>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-lime-400/20">
                  <div>
                    <p className="mb-1 text-sm text-white/50">
                      2-Step Verification
                    </p>
                    <span className="inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                      Enabled
                    </span>
                  </div>

                  <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:bg-white/10">
                    Manage
                  </button>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-yellow-400/20">
                  <div>
                    <p className="mb-1 text-sm text-white/50">Login Alerts</p>
                    <span className="inline-flex items-center rounded-full border border-yellow-400/20 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-300">
                      Active
                    </span>
                  </div>

                  <button className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-white transition hover:bg-white/10">
                    Toggle
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSetting;