"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const MobileNav = () => {
  const [toggle, setToggle] = useState(false);
  const closeButtonBorderShowUp = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const toggleButton = (e: React.MouseEvent) => {
    e.stopPropagation();
    setToggle(!toggle);
  };

  useEffect(() => {
    setToggle(false);
  }, []);

  useEffect(() => {
    if (toggle) {
      const showBorderTimeout = setTimeout(() => {
        if (closeButtonBorderShowUp.current) {
          closeButtonBorderShowUp.current.style.border = "1px solid white";
          closeButtonBorderShowUp.current.style.borderRadius = "10px";
        }

        const hideBorderTimeout = setTimeout(() => {
          if (closeButtonBorderShowUp.current) {
            closeButtonBorderShowUp.current.style.border = "none";
          }
        }, 1300); // Sesuaikan durasi border terlihat (dalam milidetik)

        // Bersihkan timeout untuk menghilangkan border jika komponen dibongkar atau toggle berubah
        return () => clearTimeout(hideBorderTimeout);
      }, 0); // Sesuaikan durasi timeout sebelum border muncul

      // Bersihkan timeout untuk menampilkan border jika komponen dibongkar atau toggle berubah
      return () => clearTimeout(showBorderTimeout);
    }
  }, [toggle]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setToggle(false);
      }
    };

    if (toggle) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggle]);

  const links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "work",
      path: "/work",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ];

  return (
    <div>
      <div onClick={toggleButton}>
        <CiMenuFries size={28} />
      </div>
      {toggle && (
        <div
          className="fixed top-0 left-0 z-50 flex justify-end w-full h-screen lg:hidden"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <div
            ref={navbarRef}
            className={`w-8/12 h-full bg-slate-800 flex items-end px-7 pt-4 flex-col`}
          >
            <div ref={closeButtonBorderShowUp} className="h-10">
              <IoMdClose
                size={38}
                className="text-green-500"
                onClick={toggleButton}
              />
            </div>
            <h2 className="w-full mt-10 mb-16 text-2xl font-bold text-center">
              Sandi<span className="text-green-500">AP</span>
            </h2>
            <ul className="flex flex-col w-full gap-y-5">
              {links.map((link, index) => (
                <li
                  key={index}
                  // className="w-full py-2 mb-3 text-center transition duration-200 rounded-md shadow cursor-pointer bg-slate-500 hover:bg-slate-600 shadow-white"
                  className="text-xl text-center"
                >
                  <a href={link.path}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
