import React from "react";

const AboutComponent = () => {
  return (
    <section className="w-full max-w-3xl px-8 pb-10 text-center">
      {/* Text Content */}
      <div>
        <h1 className="mt-10 text-3xl font-bold lg:mt-0">About Me</h1>
        <p className="my-5 text-sm text-slate-400">
          I am very interested in developing the User Interface of an
          application, whether designing it or building it. I am currently an
          Informatics student, and I also graduated from a vocational school
          majoring in Software Engineering (RPL). So I have strong fundamentals
          and a high desire to work in this field, especially Front-end.
        </p>
      </div>

      {/* Card Content */}
      <div className="grid grid-cols-1 place-items-center gap-x-5 gap-y-8 lg:hidden">
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
      </div>

      <div className="hidden lg:flex lg:gap-x-5">
        <div>
          <div>
            <p>
              <span className="text-slate-400" style={{ marginLeft: "-38px" }}>
                Name :{" "}
              </span>
              Sandi Arba Putra
            </p>
          </div>
          <div style={{ marginTop: "20px" }}>
            <p>
              <span className="text-slate-400">Phone :</span> (+62) 838 4133
              0243
            </p>
          </div>
        </div>

        <div>
          <div>
            <p>
              <span className="text-slate-400" style={{ marginLeft: "12px" }}>
                Email :
              </span>{" "}
              sandiarbaa@gmail.com
            </p>
          </div>
          <div style={{ marginTop: "20px" }}>
            <p>
              <span className="text-slate-400">Study Experience :</span> 2+
              years
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutComponent;
