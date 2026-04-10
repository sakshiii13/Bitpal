import React from "react";

const projects = [
  {
    id: 1,
    name: "Fintech Project",
    status: "In Progress",
    progress: 70,
    totalTasks: "14 / 20",
    dueDate: "12 Mar 2024",
    owner: "Michael M",
  },
  {
    id: 2,
    name: "Brodo Redesign",
    status: "Completed",
    progress: 100,
    totalTasks: "25 / 25",
    dueDate: "16 Mar 2024",
    owner: "Jhon Cena",
  },
  {
    id: 3,
    name: "HR Setup",
    status: "On Hold",
    progress: 45,
    totalTasks: "8 / 20",
    dueDate: "18 May 2024",
    owner: "Dawne Jay",
  },
];

const statusClasses = {
  "In Progress":
    "border border-blue-400/20 bg-blue-500/10 text-blue-300",
  Completed:
    "border border-lime-400/20 bg-lime-400/10 text-lime-300",
  "On Hold":
    "border border-yellow-400/20 bg-yellow-400/10 text-yellow-300",
};

const ProjectsList = () => {
  return (
    <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-[#171a22] via-[#11131a] to-[#0d1016] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.3)] sm:p-6">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-white">
            List Projects
          </h3>
          <p className="mt-1 text-sm text-white/45">
            Track project status, progress and ownership
          </p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        <table className="w-full min-w-[760px] text-left text-sm text-white">
          <thead className="bg-white/[0.02] text-white/40">
            <tr>
              <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.18em]">
                Project Name
              </th>
              <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.18em]">
                Status
              </th>
              <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.18em]">
                Progress
              </th>
              <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.18em]">
                Total Tasks
              </th>
              <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.18em]">
                Due Date
              </th>
              <th className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.18em]">
                Owner
              </th>
            </tr>
          </thead>

          <tbody>
            {projects.map((project) => (
              <tr
                key={project.id}
                className="border-t border-white/5 transition duration-300 hover:bg-white/[0.03]"
              >
                <td className="px-5 py-4">
                  <div className="font-medium text-white">{project.name}</div>
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-md ${statusClasses[project.status]}`}
                  >
                    {project.status}
                  </span>
                </td>

                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2.5 w-24 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-lime-400 shadow-[0_0_12px_rgba(163,230,53,0.45)]"
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-white/80">{project.progress}%</span>
                  </div>
                </td>

                <td className="px-5 py-4 text-white/75">{project.totalTasks}</td>
                <td className="px-5 py-4 text-white/75">{project.dueDate}</td>
                <td className="px-5 py-4 text-white/75">{project.owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectsList;