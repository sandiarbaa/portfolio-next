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
      icon: <FaHtml5 size={80} />,
      name: "html 5",
    },
    {
      icon: <FaCss3 size={80} />,
      name: "css 3",
    },
    {
      icon: <FaJs size={80} />,
      name: "javascript",
    },
    {
      icon: <FaReact size={80} />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs size={80} />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss size={80} />,
      name: "tailwindcss",
    },
    {
      icon: <FaNodeJs size={80} />,
      name: "node.js",
    },
    {
      icon: <FaFigma size={80} />,
      name: "figma",
    },
  ];
  return (
    <section className="w-full text-center px-8 pb-10">
      {/* Text Content */}
      <div>
        <h1 className="mt-10 text-3xl font-bold">My Education</h1>
        <p className="my-5 text-sm">
          The following are some of the Front-end skills and technologies that I
          have mastered.
        </p>
      </div>

      {/* Card Content */}
      <div className="grid grid-cols-2 place-items-center gap-x-5 gap-y-8">
        {skillLists.map((item, index) => (
          <div
            key={index}
            className="w-40 h-40 bg-slate-500 rounded-lg flex items-center justify-center hover:text-green-500 transition duration-300"
          >
            {item.icon}
          </div>
        ))}
      </div>
    </section>
  );
};
export default SkillsComponent;
