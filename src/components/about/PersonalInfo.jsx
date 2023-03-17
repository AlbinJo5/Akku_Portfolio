import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Akku", hasColor: "" },
  { meta: "last name", metaInfo: "Mary Sam", hasColor: "" },
  { meta: "Age", metaInfo: "26 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Indian", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "Kottayam, Kerala", hasColor: "" },
  { meta: "phone", metaInfo: "+91 8156856170", hasColor: "" },
  // language 
  { meta: "Language", metaInfo: "English, Malayalam", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}

          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
