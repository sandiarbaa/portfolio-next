import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    icons: (
      <FaGithub
        size={25}
        className="text-green-500 transition duration-300 hover:text-white"
      />
    ),
    path: "https://github.com/sandiarbaa",
  },
  {
    icons: (
      <FaInstagram
        size={25}
        className="text-green-500 transition duration-300 hover:text-white"
      />
    ),
    path: "https://www.instagram.com/_arbaa_/",
  },
  {
    icons: (
      <FaLinkedin
        size={25}
        className="text-green-500 transition duration-300 hover:text-white"
      />
    ),
    path: "https://www.linkedin.com/in/sandi-arba-putra/",
  },
];

const Social = () => {
  return (
    <div className="flex justify-center w-full my-8 gap-x-5 lg:justify-start">
      {socials.map((item, index) => (
        <Link key={index} href={item.path} target="_blank">
          <span className="">{item.icons}</span>
        </Link>
      ))}
      {/* <FaLinkedin size={25} />
      <FaGithub size={25} />
      <FaInstagram size={25} /> */}
    </div>
  );
};

export default Social;
