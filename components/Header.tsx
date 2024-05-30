import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <nav className="flex items-center justify-between w-full px-8 py-5 text-white lg:px-20">
      <Link href="/">
        <h1 className="text-2xl font-bold capitalize">
          Sandi<span className="ml-1.5 text-green-500 ">AP</span>
        </h1>
      </Link>

      {/* desktop nav */}
      <div className="hidden lg:block">
        <Nav />
      </div>

      {/* mobile nav */}
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </nav>
  );
};

export default Header;
