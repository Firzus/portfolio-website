<template>
  <section :id="idName" class="padding max-w-7xl mx-auto relative z-0">
    <span class="hash-span" :id="idName">&nbsp;</span>

    <div v-motion-text-variant class="animated-text-variant">
      <p class="sectionSubText text-center">What I have done so far</p>
      <h2 class="sectionHeadText text-center">Work Experience.</h2>
    </div>

    <div class="mt-20 flex flex-col">
      <div class="timeline-container">
        <div v-for="(experience, index) in experiences" :key="index" class="timeline-item">
          <div class="timeline-dot-wrapper">
            <div class="timeline-dot" :style="{ backgroundColor: experience.iconBg }">
              <img :src="experience.icon" :alt="experience.company_name" class="w-[60%] h-[60%] object-contain" />
            </div>
          </div>
          <div class="timeline-content-wrapper">
            <div class="timeline-content bg-tertiary p-5 rounded-lg shadow-card">
              <div>
                <h3 class="text-white text-[24px] font-bold">{{ experience.title }}</h3>
                <p class="text-secondary text-[16px] font-semibold" style="margin: 0;">
                  {{ experience.company_name }}
                </p>
                <p class="text-gray-400 text-sm mt-1">{{ experience.date }}</p>
              </div>
              <ul class="mt-5 list-disc ml-5 space-y-2">
                <li
                  v-for="(point, idx) in experience.points"
                  :key="`experience-point-${index}-${idx}`"
                  class="text-white-100 text-[14px] pl-1 tracking-wider"
                >
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Define idName for the section
const idName = "work";

// Define experiences (adapted from data/content.jsx)
// Placeholder paths for icons
const experiences = ref([
  {
    title: "Full Stack Developer",
    company_name: "Huz Studio",
    icon: "/assets/company/huzounet.png", // Example path
    iconBg: "#1F2122",
    date: "July 2024 - September 2024",
    points: [
      "Redesigned the huzounet.fr website.",
      "Created wireframes and designs using Figma.",
      "Developed the site using NextJS, PayloadCMS, and TailwindCSS.",
      "Managed self-hosting on a VPS, set up a CI/CD pipeline, and deployed using Dokploy.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Doxio",
    icon: "/assets/company/doxio.png", // Example path
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
    icon: "/assets/company/freelance.png", // Example path
    iconBg: "#1F2122", // Using a default/consistent bg, original might have varied
    date: "July 2022 - September 2022",
    points: [
      "Crafted the architectural blueprint and visual layout for the client’s website, focusing on user-centric design principles.",
      "Executed the front-end development, employing modern design techniques to enhance user engagement and satisfaction.",
      "Oversaw the deployment and routine maintenance of the site, prioritizing uptime and seamless content updates.",
    ],
  },
]);

// Placeholder directive for textVariant animation
const vMotionTextVariant = {
  mounted: (el: HTMLElement) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
  }
};

// Tailwind classes like 'padding', 'sectionSubText', 'sectionHeadText', 'bg-tertiary', 
// 'text-secondary', 'shadow-card' are expected to be globally available.
// Color 'tertiary' should be in tailwind.config.js (added in About component migration).
// Color 'white-100' (text-white-100) likely a custom Tailwind color, using text-gray-100 or similar if not defined.
</script>

<style scoped>
.hash-span {
  margin-top: -100px;
  padding-bottom: 100px;
  display: block;
}

.timeline-container {
  position: relative;
  width: 100%;
}

/* The vertical line */
.timeline-container::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: #232631; /* Tailwind gray-700 or similar */
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  display: flex;
  margin-bottom: 40px; /* Space between items */
}

.timeline-item:nth-child(odd) .timeline-dot-wrapper {
  order: 1;
  left: 50%;
  transform: translateX(-50%);
}
.timeline-item:nth-child(odd) .timeline-content-wrapper {
  order: 2;
  padding-left: calc(50% + 30px); /* 30px is half of dot-wrapper width + spacing */
  padding-right: 0;
  width: 100%;
  text-align: left;
}


.timeline-item:nth-child(even) .timeline-dot-wrapper {
  order: 1; /* Keep dot in middle for drawing line */
  left: 50%;
  transform: translateX(-50%);
}
.timeline-item:nth-child(even) .timeline-content-wrapper {
  order: 0; /* Content comes before dot visually */
  padding-right: calc(50% + 30px);
  padding-left: 0;
  width: 100%;
  text-align: right; /* Align text to the right for even items */
}
/* Ensure content block takes up space to push dot to middle */
.timeline-item:nth-child(even) .timeline-content {
   margin-left: auto; /* Push content block to the right */
}


.timeline-dot-wrapper {
  position: absolute; /* Center on the line */
  width: 60px; /* Width of the dot area */
  height: 60px; /* Height of the dot area */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

.timeline-dot {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid #232631; /* Border color for the dot */
}

.timeline-dot img {
  width: 60%;
  height: 60%;
  object-fit: contain;
}

.timeline-content-wrapper {
  width: 100%; /* Take full width for content alignment */
}

.timeline-content {
  position: relative;
  /* contentStyle={{ background: '#1d1836', color: '#fff' }} */
  /* background: #1d1836; already bg-tertiary */
  /* color: #fff; Tailwind text-white */
  width: calc(50% - 30px); /* Adjust width to be less than half, minus dot spacing */
  max-width: 450px; /* Max width for content blocks */
}

/* Arrow (simplified or omitted for manual version) */
/* Original: contentArrowStyle={{ borderRight: '7px solid #232631' }} */
/* This is complex to do dynamically for odd/even with pure CSS without more wrappers */
/* For now, a simple triangle, or just direct connection */
.timeline-item:nth-child(odd) .timeline-content::before {
  content: ' ';
  height: 0;
  position: absolute;
  top: 22px; /* Adjust to align with dot */
  width: 0;
  z-index: 1;
  left: -7px;
  border: medium solid #232631; /* Arrow color */
  border-width: 7px 7px 7px 0;
  border-color: transparent #232631 transparent transparent;
}

.timeline-item:nth-child(even) .timeline-content::before {
  content: ' ';
  height: 0;
  position: absolute;
  top: 22px; /* Adjust to align with dot */
  width: 0;
  z-index: 1;
  right: -7px; /* Arrow on the right */
  border: medium solid #232631; /* Arrow color */
  border-width: 7px 0 7px 7px;
  border-color: transparent transparent transparent #232631;
}


/* Responsive adjustments */
@media (max-width: 768px) {
  .timeline-container::before {
    left: 30px; /* Move line to the left */
  }
  .timeline-item:nth-child(odd) .timeline-dot-wrapper,
  .timeline-item:nth-child(even) .timeline-dot-wrapper {
    left: 30px; /* Align dots with the line */
    transform: translateX(-50%);
  }
  .timeline-item:nth-child(odd) .timeline-content-wrapper,
  .timeline-item:nth-child(even) .timeline-content-wrapper {
    padding-left: 75px; /* Space for dot and line */
    padding-right: 15px;
    text-align: left; /* All text left aligned */
    order: 2; /* Content always after dot */
  }
   .timeline-item:nth-child(even) .timeline-content {
    margin-left: 0; /* Reset margin for even items */
  }
  .timeline-content {
    width: 100%; /* Full width content blocks on mobile */
    max-width: none;
  }
  .timeline-item:nth-child(even) .timeline-content::before { /* Arrow always on left */
    content: ' ';
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    left: -7px;
    border: medium solid #232631;
    border-width: 7px 7px 7px 0;
    border-color: transparent #232631 transparent transparent;
  }
}

.animated-text-variant {
  /* Placeholder for animation */
}
</style>
