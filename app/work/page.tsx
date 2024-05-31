import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Work | SAP",
  description: "Work page of the portfolio",
  icons: {
    icon: "/images/icons/logo.png",
  },
};

const WorkPage = () => {
  return (
    <section className="w-full pb-10 lg:flex lg:mt-20">
      {/* Project 1 */}
      <hr className="my-10 lg:hidden" />
      <div className="w-full flex flex-col items-center gap-y-5 text-center">
        <div className="bg-slate-500 p-3 rounded-md hover:bg-slate-600 transition duration-300 hover:shadow hover:shadow-white">
          <Image
            src="/images/image/project.png"
            alt="project1"
            width={200}
            height={200}
            className="lg:w-80"
          />
        </div>
        <span>Stack : NextJS + Firebase</span>
        <h1 className="text-xl font-bold text-green-500">
          CRUD App and Authenticaation
        </h1>
        <p className="text-sm w-full max-w-xs">
          Applications that can create and process data, and can also log in and
          register
        </p>
      </div>

      {/* Project 2 */}
      <hr className="my-10 lg:hidden" />
      <div className="w-full flex flex-col items-center gap-y-5 text-center">
        <div className="bg-slate-500 p-3 rounded-md hover:bg-slate-600 transition duration-300 hover:shadow hover:shadow-white">
          <Image
            src="/images/image/project2.png"
            alt="project2"
            width={200}
            height={200}
            className="lg:w-80"
          />
        </div>
        <span>Stack : NextJS + Firebase</span>
        <h1 className="text-xl font-bold text-green-500">
          Simple shoe{"'"}s shop application
        </h1>
        <p className="text-sm w-full max-w-xs">
          Application that can view shoe products for sale, such as being able
          to see the price and details of the selected shoe product
        </p>
      </div>
    </section>
  );
};

export default WorkPage;
