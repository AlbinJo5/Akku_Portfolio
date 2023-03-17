import React from "react";

const skillsContent = [
  { skillClass: "p95", skillPercent: "95", skillName: "UI UX" },
  { skillClass: "p85", skillPercent: "85", skillName: "Web Interfaces" },
  { skillClass: "p85", skillPercent: "85", skillName: "App Interfaces" },
  { skillClass: "p65", skillPercent: "75", skillName: "Product design" },
  { skillClass: "p90", skillPercent: "90", skillName: "Prototyping" },
  { skillClass: "p80", skillPercent: "80", skillName: "Wireframing" },
  { skillClass: "p70", skillPercent: "70", skillName: "User Flow" },
  { skillClass: "p55", skillPercent: "55", skillName: "Content Creation" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
