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
    <section className="w-full text-center px-8 pb-10">
      {/* Text Content */}
      <div>
        <h1 className="mt-10 text-3xl font-bold">My Education</h1>
        <p className="my-5 text-sm">
          The following is my educational history during my journey in this
          programming field.
        </p>
      </div>

      {/* Card Content */}
      {educationData.map((item, index) => (
        <div
          style={{ marginBottom: 20 }}
          className="bg-slate-500 py-5 rounded-md"
          key={index}
        >
          <h1 className="text-green-500 font-bold">{item.year}</h1>
          <h2 className="text-lg font-bold">{item.school}</h2>
          <h3 className="text-lg text-green-400">{item.from}</h3>
        </div>
      ))}
    </section>
  );
};

export default EducationComponent;
