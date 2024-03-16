import {
  // Core
  web,
  design,
  game,
  blank,

  // Balls
  reactjs,
  tailwind,
  cpp,
  csharp,
  unity,
  unreal_engine,

  // Education
  gtech,
  bia,

  // Company
  doxio,
  freelance,

  // Showcases
  wakfu_guide,
  ia,
  engine,
  portfolio,
  plush_memory,
  reminiscence,
  nuit_detente,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Game Maker",
    icon: game,
  },
  {
    title: "Frontend",
    icon: web,
  },
  {
    title: "Web Design",
    icon: design,
  },
];

const technologies = [
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Unity",
    icon: unity,
  },
  {
    name: "Unreal Engine",
    icon: unreal_engine,
  },
];

const academics = [
  {
    title: "Bachelor's degree in IT development",
    school_name: "G.Tech, Gaming Campus, Lyon",
    icon: gtech,
    iconBg: "#191919",
    date: "September 2021 - To Date",
  },
  {
    title: "Baccalaureate STI2D - Information and Digital Systems",
    school_name: "High school Alexis Monteil, Rodez",
    icon: blank,
    iconBg: "#191919",
    date: "September 2017 - July 2021",
  },
  {
    title: "Aeronautical Initiation Certificate",
    school_name: "High school Ferdinand Foch, Rodez",
    icon: bia,
    iconBg: "#191919",
    date: "September 2017 - June 2018",
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Doxio",
    icon: doxio,
    iconBg: "#151C52",
    date: "June 2023 - July 2023",
    points: [
      "Spearheaded the creation of web configuration interfaces, integrating the responsive design of React with the robust backend functionality of Laravel.",
      "Pioneered the deployment and continuous integration strategies, ensuring streamlined and error-free operations.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Nuit Détente Rodez",
    icon: freelance,
    iconBg: "#1F2122",
    date: "July 2022 - September 2022",
    points: [
      "Crafted the architectural blueprint and visual layout for the client’s website, focusing on user-centric design principles.",
      "Executed the front-end development, employing modern design techniques to enhance user engagement and satisfaction.",
      "Oversaw the deployment and routine maintenance of the site, prioritizing uptime and seamless content updates.",
    ],
  },
];

// Not use actually
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: null,
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "My portfolio website showcases my skills and projects, utilizing Next.js and Tailwind CSS for its construction. It's a testament to my proficiency in web development and design, featuring a clean, modern layout that highlights my work and experience. The website is hosted on Vercel and versioned with GitHub, enabling easy access to the source code and project details. This feature makes it a valuable resource for potential employers and clients.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Vercel",
        color: "green-text-gradient",
      },
      {
        name: "FramerMotion",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/Firzus/portfolio-website.git",
  },
  {
    name: "Réminiscence",
    description:
      "Réminiscence is an escape room game where the player wakes up in a hospital bed, amnesiac and alone, trying to understand who they are and what happened. The game is designed for virtual reality, leveraging Unity with the XR Interaction Toolkit to create an immersive and interactive experience.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "VirtualReality",
        color: "green-text-gradient",
      },
      {
        name: "XRInteractionToolkit",
        color: "pink-text-gradient",
      },
    ],
    image: reminiscence,
    source_code_link: "https://github.com/Firzus/projet-unity-vr.git",
  },
  {
    name: "Game Engine",
    description:
      "This straightforward game engine is our venture into leveraging DirectX 12 with C++ for game development. It's a fundamental tool designed to introduce the basics of 3D game creation. While it may not boast advanced features, its simplicity makes it perfect for understanding core concepts and developing small, functional games. It provides a hands-on approach to learning the nuances of game development and graphics rendering, serving as a stepping stone for aspiring game developers.",
    tags: [
      {
        name: "DirectX12",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: ".NET",
        color: "pink-text-gradient",
      },
    ],
    image: engine,
    source_code_link: "https://github.com/Styyg/GTech3-DirectX-Engine.git",
  },
  {
    name: "Wakfu Guide",
    description:
      "Wakfu Guide, a detailed fansite for Wakfu players, is in active development, enhancing its backend for a full-fledged experience. Built with Next.js, styled with Tailwind CSS, and maintained on GitHub, it's swiftly evolving to provide comprehensive game strategies.",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: wakfu_guide,
    source_code_link: "https://github.com/Firzus/wakfu_guide_website.git",
  },
  {
    name: "Nuit Détente Rodez",
    description:
      "It's the inaugural professional website I've crafted as a freelance web developer. The site highlights the client's property and services. It's a straightforward and minimalist website developed using React.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Github",
        color: "green-text-gradient",
      },
      {
        name: "Freelance",
        color: "pink-text-gradient",
      },
    ],
    image: nuit_detente,
    source_code_link: "https://github.com/Firzus/nuit-detente-rodez.git",
  },
  {
    name: "CapiGun",
    description:
      "CapiGun is a thrilling top-down 2D RPG that emphasizes enemy AI sophistication. With behavior trees and state machines, each foe exhibits unique, adaptable combat tactics, challenging players to evolve strategies in real-time. Powered by Unity, this game delivers a fresh take on the action-RPG genre with smart, reactive gameplay.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "IA",
        color: "green-text-gradient",
      },
      {
        name: "Shaders",
        color: "pink-text-gradient",
      },
    ],
    image: ia,
    source_code_link:
      "https://github.com/Firzus/projet-intelligence-artificielle.git",
  },
  {
    name: "Plush's Memory",
    description: "Something is being prepared ...",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "Studio",
        color: "green-text-gradient",
      },
      {
        name: "MobileGame",
        color: "pink-text-gradient",
      },
    ],
    image: plush_memory,
    source_code_link: "https://github.com/Firzus/plushs-memory.git",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  academics,
};
