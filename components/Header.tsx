import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <nav className="w-full py-5 text-white px-8 lg:px-20 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl font-bold capitalize">
          Sandi<span className="text-green-500">AP</span>
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
