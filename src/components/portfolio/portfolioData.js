import img1 from "../../../public/assets/img/portfolio/1.png";
import img2 from "../../../public/assets/img/portfolio/2.png";
import img2_1 from "../../../public/assets/img/portfolio/2.1.png";
import img2_2 from "../../../public/assets/img/portfolio/2.2.png";
import img3 from "../../../public/assets/img/portfolio/3.png";
import img3_1 from "../../../public/assets/img/portfolio/3.1.png";
import img4_1 from "../../../public/assets/img/portfolio/4.1.png";
import img4_2 from "../../../public/assets/img/portfolio/4.2.png";
import img5 from "../../../public/assets/img/portfolio/5.png";
import img6 from "../../../public/assets/img/portfolio/6.png";
import img7 from "../../../public/assets/img/portfolio/7.png";
import img8 from "../../../public/assets/img/portfolio/8.png";
import img9 from "../../../public/assets/img/portfolio/9.png";
import img10 from "../../../public/assets/img/portfolio/10.png";
import img11 from "../../../public/assets/img/portfolio/11.png";
import img11_1 from "../../../public/assets/img/portfolio/11.1.png";


const PortfolioData = [
  {
    id: 1,
    type: "Pawsome",
    image: img10,
    tag: ["application"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Application",
        client: "Fat Pumkin",
        software: "Figma, Adobe Photoshop",

      },
    ],
  },
  {
    id: 3,
    type: "Portfolio",
    image: img11,
    images: [
      {
        id: 1,
        image: img11,
      },
      {
        id: 2,
        image: img11_1,
      },
    ],
    tag: ["website"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Website",
        client: "Personal",
        software: "Adobe XD, Adobe Photoshop",
      },
    ],
  },
  {
    id: 1,
    type: "X Pay",
    image: img6,
    tag: ["application"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Application",
        client: "Project",
        software: "Adobe XD, Adobe Photoshop",

      },
    ],
  },
  {
    id: 3,
    type: "Fine Chefs",
    image: img2,
    images: [
      {
        id: 1,
        image: img2,
      },
      {
        id: 2,
        image: img2_1,
      },
      {
        id: 3,
        image: img2_2,
      },
    ],
    tag: ["website"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Website",
        client: "Project",
        software: "Adobe XD, Adobe Photoshop",
      },
    ],
  },
  {
    id: 1,
    type: "C-Cinema",
    image: img7,
    tag: ["application"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Application",
        client: "Project",
        software: "Adobe XD, Adobe Photoshop",

      },
    ],
  },
  {
    id: 1,
    type: "Dine",
    image: img5,
    tag: ["application"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Application",
        client: "Personal",
        software: "Adobe XD, Adobe Photoshop",

      },
    ],
  },
  {
    id: 3,
    type: "Blackcoffer",
    image: img4_1,
    images: [
      {
        id: 1,
        image: img4_1,
      },
      {
        id: 2,
        image: img4_2,
      },
    ],
    tag: ["website"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Website",
        client: "Assignment",
        software: "Adobe XD, Adobe Photoshop",
      },
    ],
  },
  {
    id: 3,
    type: "Freegram",
    image: img3_1,
    images: [
      {
        id: 1,
        image: img3_1,
      },
      {
        id: 2,
        image: img3,
      },
    ],
    tag: ["website"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Website",
        client: "Project",
        software: "Adobe XD, Adobe Photoshop",
      },
    ],
  },
  {
    id: 1,
    type: "Favourite Fab",
    image: img9,
    tag: ["application"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Application",
        client: "Favourite Fab",
        software: "Figma, Adobe Photoshop",

      },
    ],
  },
  {
    id: 1,
    type: "Study Space",
    image: img8,
    tag: ["application"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Application",
        client: "Project",
        software: "Adobe XD, Adobe Photoshop",

      },
    ],
  },
  {
    id: 1,
    type: "SoundSphere",
    image: img1,
    tag: ["website"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Application",
        client: "Personal",
        software: "Adobe XD, Adobe Photoshop",

      },
    ],
  },

];

export default PortfolioData;
