import React from "react";

const EducationComponent = () => {
  const educationData = [
    {
      year: "2019-2022",
      school: "Software Engineering School",
      from: "SMKN 4 Tangerang",
    },
    {
      year: "2022-Present",
      school: "Informatics Student",
      from: "University Muhammadiyah TNG",
    },
    {
      year: "2023-2024",
      school: "Campus Coder Fullstack MERN",
      from: "Codepolitan",
    },
    {
      year: "2023",
      school: "Bootcamp Front-end Dev",
      from: "Edspert.id",
    },
  ];
  return (
    <section className="w-full max-w-3xl px-8 pb-10 text-center lg:pb-0 mt-0 lg:mt-[-50px]">
      {/* Text Content */}
      <div>
        <h1 className="mt-10 text-3xl font-bold lg:mt-0">My Education</h1>
        <p className="my-5 text-sm">
          The following is my educational history during my journey in this
          programming field.
        </p>
      </div>

      {/* Card SKills Content Mobile*/}
      <div className="flex flex-wrap justify-center gap-5">
        {educationData.map((item, index) => (
          <div
            style={{ marginBottom: 20 }}
            className="py-5 rounded-md w-72 lg:w-60 bg-slate-500"
            key={index}
          >
            <h1 className="font-bold text-green-500">{item.year}</h1>
            <h2 className="text-lg font-bold">{item.school}</h2>
            <h3 className="text-lg text-green-400">{item.from}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationComponent;
