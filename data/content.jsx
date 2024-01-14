import {
    // Core
    web,
    design,
    game,

    // Balls
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    threejs,
    cpp,
    csharp,
    framer,
    mui,
    nextjs,
    unity,
    unreal_engine,

    // Company
    doxio,
    nuit_detente,

    // Showcases
    wakfu_guide,
    ia,
    engine,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
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
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "Figma",
        icon: figma,
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
        name: "Framer",
        icon: framer,
    },
    {
        name: "MUI",
        icon: mui,
    },
    {
        name: "Unity",
        icon: unity,
    },
    {
        name: "Next JS",
        icon: nextjs,
    },
    {
        name: "Unreal Engine 5",
        icon: unreal_engine,
    },
];

// Not use actually & not implemented
const education = [
    {
        title: "Full Stack Developer",
        company_name: "Doxio",
        icon: doxio,
        iconBg: "#151C52",
        date: "June 2023 - July 2023",
        points: [
            "I developed web configuration interfaces using React and Laravel, focusing on creating intuitive and robust user experiences.",
            "I led the deployment and continuous integration processes, enhancing the efficiency and reliability of our development workflow.",
        ],
    },
    {
        title: "Freelance Web Developer",
        company_name: "Nuit Détente Rodez",
        icon: nuit_detente,
        iconBg: "#1F2122",
        date: "July 2022 - September 2022",
        points: [
            "I designed and implemented the website architecture and layout, ensuring a seamless and engaging user interface.",
            "I was responsible for both the design and frontend development, bringing together visual appeal and functionality.",
            "Frontend",
            "I managed the deployment and ongoing maintenance of the website, ensuring high availability and up-to-date content.",
        ],
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
        icon: nuit_detente,
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
        testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: null,
    },
];

const projects = [
    {
        name: "Wakfu Guide",
        description:
            "Wakfu Guide, a detailed fansite for Wakfu players, is in active development, enhancing its backend for a full-fledged experience. Built with Next.js, styled with Tailwind CSS, and maintained on GitHub, it's swiftly evolving to provide comprehensive game strategies.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "green-text-gradient",
            },
            {
                name: "github",
                color: "pink-text-gradient",
            },
        ],
        image: wakfu_guide,
        source_code_link: "https://github.com/Firzus/wakfu_guide_website.git",
    },
    {
        name: "CapiGun",
        description:
            "CapiGun is a thrilling top-down 2D RPG that emphasizes enemy AI sophistication. With behavior trees and state machines, each foe exhibits unique, adaptable combat tactics, challenging players to evolve strategies in real-time. Powered by Unity, this game delivers a fresh take on the action-RPG genre with smart, reactive gameplay.",
        tags: [
            {
                name: "unity",
                color: "blue-text-gradient",
            },
            {
                name: "behaviorTree",
                color: "green-text-gradient",
            },
            {
                name: "stateMachine",
                color: "pink-text-gradient",
            },
        ],
        image: ia,
        source_code_link: "https://github.com/Firzus/projet-intelligence-artificielle.git",
    },
    {
        name: "Game Engine",
        description:
            "This straightforward game engine is our venture into leveraging DirectX 12 with C++ for game development. It's a fundamental tool designed to introduce the basics of 3D game creation. While it may not boast advanced features, its simplicity makes it perfect for understanding core concepts and developing small, functional games. It provides a hands-on approach to learning the nuances of game development and graphics rendering, serving as a stepping stone for aspiring game developers.",
        tags: [
            {
                name: "directX12",
                color: "blue-text-gradient",
            },
            {
                name: "c++",
                color: "green-text-gradient",
            },
            {
                name: "github",
                color: "pink-text-gradient",
            },
        ],
        image: engine,
        source_code_link: "https://github.com/Styyg/GTech3-DirectX-Engine.git",
    },
];

export { services, technologies, experiences, testimonials, projects, education };