"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const Layout = ({
  children,
  modal1,
  modal2,
  modal3,
}: {
  children: ReactNode;
  modal1: ReactNode;
  modal2: ReactNode;
  modal3: ReactNode;
}) => {
  const pathname = usePathname();

  const resumeLinks = [
    { name: "About Me", path: "/resume/about" },
    { name: "Education", path: "/resume/education" },
    { name: "Skills", path: "/resume/skills" },
  ];
  return (
    <>
      {/* Mobile */}
      <section className="min-h-screen lg:hidden">
        {children}
        {pathname === "/resume/education" && modal1}
        {pathname === "/resume/skills" && modal2}
        {pathname === "/resume/about" && modal3}
      </section>

      {/* Desktop */}
      {pathname === "/resume" && (
        <section className="hidden lg:block">
          {children}
          {/* {pathname === "/resume/education" && modal1}
        {pathname === "/resume/skills" && modal2}
        {pathname === "/resume/about" && modal3} */}
        </section>
      )}

      {/* Kalau pathname bukan resume */}
      {pathname !== "/resume" && (
        <div className="container h-full px-8 mx-auto lg:px-20">
          {/* Desktop Content */}
          {/* white second cover */}
          <div className="hidden w-full mt-20 lg:flex gap-x-5 lg:justify-center">
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
                          ? "bg-green-500 text-slate-800 font-bold"
                          : "bg-slate-500"
                      } rounded-md mb-3 hover:bg-slate-600`}
                    >
                      {item.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
            {/* {pathname === "/resume" && ( */}
            {/* <div className="w-full max-w-xl bg-pink-500">
                <p>
                  Here it{"'"}s all about me, you can see about me, my
                  education, and the skills I have mastered.
                </p>
              </div> */}
            {pathname === "/resume/education" && modal1}
            {pathname === "/resume/skills" && modal2}
            {pathname === "/resume/about" && modal3}
            {/* )} */}
          </div>
        </div>
      )}

      {/* {pathname !== "/resume" && (
        <section className="hidden lg:flex lg:w-full lg:justify-center lg:px-20">
          <div className="bg-orange-500 lg:w-full lg:max-w-sm">{children}</div>
          <div className="bg-slate-500 lg:w-full lg:max-w-xl">
            {pathname === "/resume/education" && modal1}
            {pathname === "/resume/skills" && modal2}
            {pathname === "/resume/about" && modal3}
          </div>
        </section>
      )} */}

      {/* {pathname !== "/resume" && (
        <section className="hidden bg-green-500 lg:block">
          
        </section>
      )} */}
    </>
  );
};

export default Layout;
