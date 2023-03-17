import React from "react";

const SocialShare = [

  { iconName: "fa fa-instagram", link: "https://www.instagram.com/akku__mary__sam/" },
  { iconName: "fa fa-facebook", link: "https://www.facebook.com/akku.marysam" },
  { iconName: "fa fa-dribbble", link: "https://dribbble.com/akku__mary__sam" },
  { iconName: "fa fa-behance", link: "https://www.behance.net/akkumarysam" },
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
