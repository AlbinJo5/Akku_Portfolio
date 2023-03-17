import React from "react";

const educationContent = [
  {
    year: "2022",
    degree: "Diploma in UI/UX Design",
    institute: "AVODHA",
    details: `  Learnt advanced concepts of UI UX Designing
    Completed 7 internal projects
    that help me to strengthened my UI UX skills`,
  },
  {
    year: "2020",
    degree: "Master of Arts (M.A.)",
    institute: "University Of Sanskrit",
    details: `Master of Arts in Education with a focus on Malayalam Language and Literature`,
  },
  {
    year: "2009",
    degree: "BACHELOR DEGREE ",
    institute: "CMS College Kottayam",
    details: `Bachelor of Arts in Education with a focus on Malayalam Language and Literature`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
