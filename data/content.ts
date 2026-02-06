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
  huzounet,
  wakfu_guide,
  ia,
  engine,
  portfolio,
  plush_memory,
  reminiscence,
  nuit_detente,
  huzounet_demo,
} from '@/public/assets'

import type {
  NavLink,
  Service,
  Technology,
  Academic,
  ExperiencePoint,
  Testimonial,
  Project,
} from '@/types'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'education',
    title: 'Education',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
] satisfies NavLink[]

export const services = [
  {
    title: 'Game Maker',
    icon: game,
  },
  {
    title: 'Frontend',
    icon: web,
  },
  {
    title: 'Web Design',
    icon: design,
  },
] satisfies Service[]

export const technologies = [
  {
    name: 'React',
    icon: reactjs,
  },
  {
    name: 'Tailwind',
    icon: tailwind,
  },
  {
    name: 'C++',
    icon: cpp,
  },
  {
    name: 'C#',
    icon: csharp,
  },
  {
    name: 'Unity',
    icon: unity,
  },
  {
    name: 'Unreal Engine',
    icon: unreal_engine,
  },
] satisfies Technology[]

export const academics = [
  {
    title: "Master's degree in IT development",
    school_name: 'G.Tech, Gaming Campus, Lyon',
    icon: gtech,
    iconBg: '#191919',
    date: 'September 2024 - To Date',
  },
  {
    title: "Bachelor's degree in IT development",
    school_name: 'G.Tech, Gaming Campus, Lyon',
    icon: gtech,
    iconBg: '#191919',
    date: 'September 2021 - September 2024',
  },
  {
    title: 'Baccalaureate STI2D - Information and Digital Systems',
    school_name: 'High school Alexis Monteil, Rodez',
    icon: blank,
    iconBg: '#191919',
    date: 'September 2017 - July 2021',
  },
  {
    title: 'Aeronautical Initiation Certificate',
    school_name: 'High school Ferdinand Foch, Rodez',
    icon: bia,
    iconBg: '#191919',
    date: 'September 2017 - June 2018',
  },
] satisfies Academic[]

export const experiences = [
  {
    title: 'Full Stack Developer',
    company_name: 'Huz Studio',
    icon: huzounet,
    iconBg: '#1F2122',
    date: 'July 2024 - September 2024',
    points: [
      'Redesigned the huzounet.fr website.',
      'Created wireframes and designs using Figma.',
      'Developed the site using NextJS, PayloadCMS, and TailwindCSS.',
      'Managed self-hosting on a VPS, set up a CI/CD pipeline, and deployed using Dokploy.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Doxio',
    icon: doxio,
    iconBg: '#151C52',
    date: 'June 2023 - July 2023',
    points: [
      'Spearheaded the creation of web configuration interfaces, integrating the responsive design of React with the robust backend functionality of Laravel.',
      'Pioneered the deployment and continuous integration strategies, ensuring streamlined and error-free operations.',
    ],
  },
  {
    title: 'Freelance Web Developer',
    company_name: 'Nuit Détente Rodez',
    icon: freelance,
    iconBg: '#1F2122',
    date: 'July 2022 - September 2022',
    points: [
      "Crafted the architectural blueprint and visual layout for the client's website, focusing on user-centric design principles.",
      'Executed the front-end development, employing modern design techniques to enhance user engagement and satisfaction.',
      'Oversaw the deployment and routine maintenance of the site, prioritizing uptime and seamless content updates.',
    ],
  },
] satisfies ExperiencePoint[]

// Not used currently
export const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: null,
  },
] satisfies Testimonial[]

export const projects = [
  {
    name: 'Huzounet',
    description:
      'Huzounet is a community website designed to assist players of the game Dofus in their progression. It is mainly divided into three sections: equipment, which is an encyclopedia of optimized gear for progression, guides, which are blog-like posts, and tools, which, as the name suggests, are various tools to help players.',
    tags: [
      {
        name: 'NextJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'SelfHosted',
        color: 'green-text-gradient',
      },
      {
        name: 'PayloadCMS',
        color: 'pink-text-gradient',
      },
    ],
    image: huzounet_demo,
    source_code_link: 'https://huzounet.fr',
  },
  {
    name: 'Portfolio',
    description:
      "My portfolio website showcases my skills and projects, utilizing Next.js and Tailwind CSS for its construction. It's a testament to my proficiency in web development and design, featuring a clean, modern layout that highlights my work and experience. The website is hosted on Vercel and versioned with GitHub, enabling easy access to the source code and project details. This feature makes it a valuable resource for potential employers and clients.",
    tags: [
      {
        name: 'NextJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'SelfHosted',
        color: 'green-text-gradient',
      },
      {
        name: 'FramerMotion',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    source_code_link: 'https://github.com/Firzus/portfolio-website.git',
  },
  {
    name: 'Réminiscence',
    description:
      'Réminiscence is an escape room game where the player wakes up in a hospital bed, amnesiac and alone, trying to understand who they are and what happened. The game is designed for virtual reality, leveraging Unity with the XR Interaction Toolkit to create an immersive and interactive experience.',
    tags: [
      {
        name: 'Unity',
        color: 'blue-text-gradient',
      },
      {
        name: 'VirtualReality',
        color: 'green-text-gradient',
      },
      {
        name: 'XRInteractionToolkit',
        color: 'pink-text-gradient',
      },
    ],
    image: reminiscence,
    source_code_link: 'https://github.com/Firzus/projet-unity-vr.git',
  },
  {
    name: 'Game Engine',
    description:
      "This straightforward game engine is our venture into leveraging DirectX 12 with C++ for game development. It's a fundamental tool designed to introduce the basics of 3D game creation. While it may not boast advanced features, its simplicity makes it perfect for understanding core concepts and developing small, functional games. It provides a hands-on approach to learning the nuances of game development and graphics rendering, serving as a stepping stone for aspiring game developers.",
    tags: [
      {
        name: 'DirectX12',
        color: 'blue-text-gradient',
      },
      {
        name: 'C++',
        color: 'green-text-gradient',
      },
      {
        name: '.NET',
        color: 'pink-text-gradient',
      },
    ],
    image: engine,
    source_code_link: 'https://github.com/Styyg/GTech3-DirectX-Engine.git',
  },
  {
    name: 'Wakfu Guide',
    description:
      "Wakfu Guide, a detailed fansite for Wakfu players, is in active development, enhancing its backend for a full-fledged experience. Built with Next.js, styled with Tailwind CSS, and maintained on GitHub, it's swiftly evolving to provide comprehensive game strategies.",
    tags: [
      {
        name: 'NextJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'green-text-gradient',
      },
      {
        name: 'Figma',
        color: 'pink-text-gradient',
      },
    ],
    image: wakfu_guide,
    source_code_link: 'https://github.com/Firzus/wakfu_guide_website.git',
  },
  {
    name: 'Nuit Détente Rodez',
    description:
      "It's the inaugural professional website I've crafted as a freelance web developer. The site highlights the client's property and services. It's a straightforward and minimalist website developed using React.",
    tags: [
      {
        name: 'ReactJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Github',
        color: 'green-text-gradient',
      },
      {
        name: 'Freelance',
        color: 'pink-text-gradient',
      },
    ],
    image: nuit_detente,
    source_code_link: 'https://github.com/Firzus/nuit-detente-rodez.git',
  },
  {
    name: 'CapiGun',
    description:
      'CapiGun is a thrilling top-down 2D RPG that emphasizes enemy AI sophistication. With behavior trees and state machines, each foe exhibits unique, adaptable combat tactics, challenging players to evolve strategies in real-time. Powered by Unity, this game delivers a fresh take on the action-RPG genre with smart, reactive gameplay.',
    tags: [
      {
        name: 'Unity',
        color: 'blue-text-gradient',
      },
      {
        name: 'IA',
        color: 'green-text-gradient',
      },
      {
        name: 'Shaders',
        color: 'pink-text-gradient',
      },
    ],
    image: ia,
    source_code_link: 'https://github.com/Firzus/projet-intelligence-artificielle.git',
  },
  {
    name: "Plush's Memory",
    description:
      "Plush's Memory is a mobile game developed with Unity. It's a memory game where the player must find pairs of plushies to win. The game features multiple levels, each with increasing difficulty, and a scoring system to track player performance. It's a fun and engaging game that tests memory and cognitive skills.",
    tags: [
      {
        name: 'Unity',
        color: 'blue-text-gradient',
      },
      {
        name: 'MiniStudio',
        color: 'green-text-gradient',
      },
      {
        name: 'Mobile',
        color: 'pink-text-gradient',
      },
    ],
    image: plush_memory,
    source_code_link: 'https://github.com/Firzus/plushs-memory.git',
  },
] satisfies Project[]
