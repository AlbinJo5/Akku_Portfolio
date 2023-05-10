import React from "react";

const experienceContent = [
  {
    year: "   Nov 2022  - Dec 2022",
    position: " UI Designer",
    compnayName: "Trentit Pvt Limited",
    details: `  Creation of a unique yet easily comprehensible recommence platform`,
  },
  {
    year: "Jan 2023 - Jan 2023",
    position: " UI/UX Designer ",
    compnayName: "Study Space ( Project )",
    details: `A learning application for students which will help them to learn and revise their lessons in a fun way`,
  },
  {
    year: "Feb 2023 - Feb 2023",
    position: "UI Designer",
    compnayName: "Blackcoffer",
    details: `A consultancy app that focus on creating an intuitive, user-friendly interface that makes it easy for users to access the app's features and get the information they need.`,
  },
  
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
