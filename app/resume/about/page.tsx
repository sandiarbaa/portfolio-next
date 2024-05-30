import React from "react";

const AboutComponent = () => {
  return (
    <section className="w-full text-center px-8 pb-10">
      {/* Text Content */}
      <div>
        <h1 className="mt-10 text-3xl font-bold">My Education</h1>
        <p className="my-5 text-sm text-slate-400">
          I am very interested in developing the User Interface of an
          application, whether designing it or building it. I am currently an
          Informatics student, and I also graduated from a vocational school
          majoring in Software Engineering (RPL). So I have strong fundamentals
          and a high desire to work in this field, especially Front-end.
        </p>
      </div>

      {/* Card Content */}
      <div className="grid grid-cols-1 place-items-center gap-x-5 gap-y-8">
        <p>
          <span className="text-slate-400">Name : </span>Sandi Arba Putra
        </p>
        <p>
          <span className="text-slate-400">Phone :</span> (+62) 838 4133 0243
        </p>
        <p>
          <span className="text-slate-400">Email :</span> sandiarbaa@gmail.com
        </p>
        <p>
          <span className="text-slate-400">Study Experience :</span> 2+ years
        </p>

        {/* {skillLists.map((item, index) => (
          <div
            key={index}
            className="w-40 h-40 bg-slate-500 rounded-lg flex items-center justify-center hover:text-green-500 transition duration-300"
          >
            {item.icon}
          </div>
        ))} */}
      </div>
    </section>
  );
};
export default AboutComponent;
