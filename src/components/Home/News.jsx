import React from "react";

const blogPosts = [
  {
    id: 1,
    date: "August 10, 2018",
    title: "ICO Projection",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient monte, nases ridi culu ...",
  },
  {
    id: 2,
    date: "August 10, 2018",
    title: "The First Edge ICO",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient monte, nases ridi culu ...",
  },
  {
    id: 3,
    date: "August 10, 2018",
    title: "Crypto is stable?",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient monte, nases ridi culu ...",
  },
];

const News = () => {
  return (
    <section className="relative bg-[#0b0f14] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-y-0 left-[16.66%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[33.33%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[50%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[66.66%] w-px bg-white/10" />
        <div className="absolute inset-y-0 left-[83.33%] w-px bg-white/10" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <h1 className="text-[180px] md:text-[260px] lg:text-[320px] font-bold text-white/[0.02] leading-none uppercase select-none mt-8">
          news
        </h1>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 min-h-[640px]">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="px-20 md:px-28 lg:px-36 py-24 md:py-28 flex items-center"
          >
            <div className="max-w-[360px]">
              <p className="text-white/45 text-[20px] mb-5">{post.date}</p>

              <h2 className="text-white text-[30px] md:text-[40px] lg:text-[50px]  leading-[1.05] mb-8">
                {post.title}
              </h2>

              <p className="text-white/80 text-[18px] leading-[2] mb-10">
                {post.description}
              </p>

              <button className="inline-flex items-center gap-3 text-white text-[20px] font-semibold uppercase tracking-[1px] hover:text-lime-400 transition-colors duration-300">
                READ MORE
                <span className="text-[24px]">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;