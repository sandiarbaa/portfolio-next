"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ResumePage = () => {
  const resumeLinks = [
    { name: "About Me", path: "/resume/about" },
    { name: "Education", path: "/resume/education" },
    { name: "Skills", path: "/resume/skills" },
  ];

  const pathname = usePathname();

  return (
    <div className="container h-full px-8 mx-auto lg:px-20">
      {/* top-content WHY? */}
      {/* Text content mobile */}
      <div className="w-full text-center lg:hidden">
        <h1 className="text-3xl font-bold">Why Hire Me?</h1>
        <p className="my-5 text-sm">
          Because I{"'"}ve high skill for creating ui application. And I very
          interested for designin and creating UI for application
        </p>
      </div>

      {/* Button  Resume Mobile */}
      <div className="w-full text-center lg:hidden">
        <ul>
          {resumeLinks.map((item, index) => (
            <Link href={item.path} key={index}>
              <li
                className={`px-4 py-3 ${
                  pathname === item.path
                    ? "bg-green-500 text-slate-800 font-bold"
                    : "bg-slate-500"
                } rounded-md mb-3 hover:bg-slate-600 duration-300 transition`}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Desktop Content */}
      {/* white second cover */}
      <div className="hidden w-full h-full mt-20 lg:flex gap-x-5 lg:justify-center">
        <div className="w-full lg:max-w-sm">
          {/* text content desktop */}
          <div className="hidden w-full text-center lg:block">
            <h1 className="text-3xl font-bold">Why Hire Me?</h1>
            <p className="my-5 text-sm">
              Because I{"'"}ve high skill for creating ui application. And I
              very interested for designin and creating UI for application
            </p>
          </div>
          <ul>
            {resumeLinks.map((item, index) => (
              <Link href={item.path} key={index}>
                <li
                  className={`px-4 py-3 ${
                    pathname === item.path
                      ? "text-slate-800 font-bold"
                      : "bg-slate-500"
                  } rounded-md mb-3 hover:bg-slate-600`}
                >
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        {pathname === "/resume" && (
          <div className="w-full max-w-3xl">
            <p className="mx-auto text-lg font-bold text-center mt-28 w-60">
              Here it{"'"}s all about me, you can see about me, my education,
              and the skills I have mastered.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePage;
