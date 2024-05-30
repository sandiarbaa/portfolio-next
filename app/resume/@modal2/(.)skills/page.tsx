import React from "react";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const SkillsComponent = () => {
  const skillLists = [
    {
      icon: <FaHtml5 size={70} />,
      name: "html 5",
    },
    {
      icon: <FaCss3 size={70} />,
      name: "css 3",
    },
    {
      icon: <FaJs size={70} />,
      name: "javascript",
    },
    {
      icon: <FaReact size={70} />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs size={70} />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss size={70} />,
      name: "tailwindcss",
    },
    {
      icon: <FaNodeJs size={70} />,
      name: "node.js",
    },
    {
      icon: <FaFigma size={70} />,
      name: "figma",
    },
  ];
  return (
    <section className="w-full max-w-3xl px-8 pb-10 text-center">
      {/* Text Content */}
      <div className="mb-10 lg:mb-0">
        <h1 className="mt-10 text-3xl font-bold lg:mt-0">My Skills</h1>
        <p className="my-5 text-sm">
          The following are some of the Front-end skills and technologies that I
          have mastered.
        </p>
      </div>

      {/* Card Skills Content Mobile */}
      <div className="grid grid-cols-2 place-items-center gap-x-5 gap-y-8 lg:hidden">
        {skillLists.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-40 h-40 transition duration-300 rounded-lg bg-slate-500 hover:bg-white hover:text-green-500 hover:shadow hover:shadow-white"
          >
            {item.icon}
          </div>
        ))}
      </div>

      {/* Card Skills Content Desktop*/}
      <div className="hidden lg:flex lg:flex-col pl-8 lg:w-full lg:items-center lg:justify-center">
        <div className="flex w-full p-5 gap-x-5">
          <div>
            {
              <FaHtml5
                size={80}
                className="w-32 py-5 transition duration-500 rounded-lg bg-slate-500 hover:bg-white hover:text-green-500"
              />
            }
          </div>
          <div>
            {
              <FaCss3
                size={80}
                className="w-32 py-5 transition duration-500 rounded-lg bg-slate-500 hover:bg-white hover:text-green-500"
              />
            }
          </div>
          <div>
            {
              <FaJs
                size={80}
                className="w-32 py-5 transition duration-500 rounded-lg bg-slate-500 hover:bg-white hover:text-green-500"
              />
            }
          </div>
          <div>
            {
              <FaReact
                size={80}
                className="w-32 py-5 transition duration-500 rounded-lg bg-slate-500 hover:bg-white hover:text-green-500"
              />
            }
          </div>
        </div>
        <div className="flex w-full p-5 gap-x-5">
          <div>
            {
              <SiNextdotjs
                size={80}
                className="w-32 py-5 transition duration-500 rounded-lg bg-slate-500 hover:bg-white hover:text-green-500"
              />
            }
          </div>
          <div>
            {
              <SiTailwindcss
                size={80}
                className="w-32 py-5 transition duration-500 rounded-lg bg-slate-500 hover:bg-white hover:text-green-500"
              />
            }
          </div>
          <div>
            {
              <FaNodeJs
                size={80}
                className="w-32 py-5 transition duration-500 rounded-lg bg-slate-500 hover:bg-white hover:text-green-500"
              />
            }
          </div>
          <div>
            {
              <FaFigma
                size={80}
                className="w-32 py-5 transition duration-500 rounded-lg bg-slate-500 hover:bg-white hover:text-green-500"
              />
            }
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkillsComponent;
