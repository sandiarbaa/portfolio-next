"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  const links = [
    {
      name: "home",
      href: "/",
    },
    {
      name: "resume",
      href: "/resume",
    },
    {
      name: "work",
      href: "/work",
    },
  ];
  return (
    <ul className="flex gap-5 items-center">
      {links.map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className={
            pathname === link.href
              ? "text-green-500 border-b-2 border-green-500"
              : "hover:text-green-500 transition-all"
          }
        >
          <li className="capitalize">{link.name}</li>
        </Link>
      ))}
    </ul>
  );
};

export default Nav;
