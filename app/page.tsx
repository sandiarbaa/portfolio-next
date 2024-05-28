import type { Metadata } from "next";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | SAP",
  description: "Home page of the portfolio",
  icons: {
    icon: "/images/icons/logo.png",
  },
};

export default function Home() {
  return (
    <section className="min-h-screen">
      <div className="container h-full px-8 mx-auto lg:px-20">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between lg:pt-8">
          <div className="order-2 w-full h-full lg:max-w-lg lg:order-none">
            {/* text */}
            <div className="text-center lg:text-left">
              <span className="text-xl">
                <span className="text-green-500">Front-end Developer</span>{" "}
              </span>
              <h1 className="my-3 h1">
                <span className="mr-2">Hello,</span>I{"'"}am{" "}
                <span className="text-green-500">Sandi Arba</span>
              </h1>
              <p className="text-sm">
                I can build awesome & modern UI for Websites. And I am very
                interested in designing application UI
              </p>
            </div>
            {/* Read More Button */}
            {/* <Link
              href={"/work"}
              className="px-4 py-2 font-bold text-center bg-green-500 rounded-lg shadow text-slate-800 shadow-white"
            >
              <span>Read More</span>
            </Link> */}
            {/* social */}
            <Social />
          </div>

          {/* Photo */}
          <div className="order-1 mb-8 lg:order-none lg:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
