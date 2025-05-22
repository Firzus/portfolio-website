<template>
  <section :id="idName" class="padding max-w-7xl mx-auto relative z-0">
    <span class="hash-span" :id="idName">&nbsp;</span>

    <div v-motion-text-variant class="animated-text-variant">
      <p class="sectionSubText text-center">My work</p>
      <h2 class="sectionHeadText text-center">Projects.</h2>
    </div>

    <div class="w-full flex">
      <p
        v-motion-fade-in
        class="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] animated-fade-in mx-auto text-center md:text-left"
      >
        Following projects showcases my skills and experience through
        real-world examples of my work. Each project is briefly described with
        links to code repositories and live demos in it. It reflects my
        ability to solve complex problems, work with different technologies,
        and manage projects effectively.
      </p>
    </div>

    <div class="mt-20 flex flex-wrap gap-7 justify-center">
      <div
        v-for="(project, index) in projects"
        :key="`project-${index}`"
        v-motion-card-fade-in="{ index }"
        class="animated-card-fade-in"
      >
        <div
          v-tilt="{ max: 45, scale: 1, speed: 450 }"
          class="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div class="relative w-full h-[230px]">
            <img
              :src="project.image"
              :alt="project.name"
              class="w-full h-full object-cover rounded-2xl"
            />
            <div class="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                @click="() => window.open(project.source_code_link, '_blank')"
                class="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src="/assets/github.png"
                  alt="github"
                  class="w-1/2 h-1/2 object-contain"
                />
              </div>
              <!-- Add another div here for live demo link if available in data -->
            </div>
          </div>

          <div class="mt-5">
            <h3 class="text-white font-bold text-[24px]">{{ project.name }}</h3>
            <p class="mt-2 text-secondary text-[14px]">{{ project.description }}</p>
          </div>

          <div class="mt-4 flex flex-wrap gap-2">
            <p v-for="tag in project.tags" :key="tag.name" :class="`text-[14px] ${tag.color}`">
              #{{ tag.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import vTilt from 'vue-tilt.js'; // Import the directive

// Define idName for the section
const idName = "projects"; // Or "" if not a direct navigation target

// Define projects (adapted from data/content.jsx)
// Placeholder paths for images - these should point to actual files in /public/assets/projects/
const projects = ref([
  {
    name: "Huzounet",
    description:
      "Huzounet is a community website designed to assist players of the game Dofus in their progression. It is mainly divided into three sections: equipment, which is an encyclopedia of optimized gear for progression, guides, which are blog-like posts, and tools, which, as the name suggests, are various tools to help players.",
    tags: [
      { name: "NextJS", color: "blue-text-gradient" },
      { name: "SelfHosted", color: "green-text-gradient" },
      { name: "PayloadCMS", color: "pink-text-gradient" },
    ],
    image: "/assets/projects/huzounet_demo.png", // Updated path
    source_code_link: "https://huzounet.fr", // This is a live link, not GH. Assuming it's intentional.
  },
  {
    name: "Portfolio",
    description:
      "My portfolio website showcases my skills and projects, utilizing Next.js and Tailwind CSS for its construction. It's a testament to my proficiency in web development and design, featuring a clean, modern layout that highlights my work and experience. The website is hosted on Vercel and versioned with GitHub, enabling easy access to the source code and project details. This feature makes it a valuable resource for potential employers and clients.",
    tags: [
      { name: "NextJS", color: "blue-text-gradient" },
      { name: "SelfHosted", color: "green-text-gradient" },
      { name: "FramerMotion", color: "pink-text-gradient" },
    ],
    image: "/assets/projects/portfolio.png", // Updated path
    source_code_link: "https://github.com/Firzus/portfolio-website.git",
  },
  {
    name: "Réminiscence",
    description:
      "Réminiscence is an escape room game where the player wakes up in a hospital bed, amnesiac and alone, trying to understand who they are and what happened. The game is designed for virtual reality, leveraging Unity with the XR Interaction Toolkit to create an immersive and interactive experience.",
    tags: [
      { name: "Unity", color: "blue-text-gradient" },
      { name: "VirtualReality", color: "green-text-gradient" },
      { name: "XRInteractionToolkit", color: "pink-text-gradient" },
    ],
    image: "/assets/projects/reminiscence.png", // Updated path
    source_code_link: "https://github.com/Firzus/projet-unity-vr.git",
  },
   {
    name: "Game Engine",
    description:
      "This straightforward game engine is our venture into leveraging DirectX 12 with C++ for game development. It's a fundamental tool designed to introduce the basics of 3D game creation. While it may not boast advanced features, its simplicity makes it perfect for understanding core concepts and developing small, functional games. It provides a hands-on approach to learning the nuances of game development and graphics rendering, serving as a stepping stone for aspiring game developers.",
    tags: [
      { name: "DirectX12", color: "blue-text-gradient" },
      { name: "C++", color: "green-text-gradient" },
      { name: ".NET", color: "pink-text-gradient" },
    ],
    image: "/assets/projects/engine.png", // Updated path
    source_code_link: "https://github.com/Styyg/GTech3-DirectX-Engine.git",
  },
  // Add more projects as needed, ensuring image paths are correct
]);

// Placeholder directives for animations
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

const vMotionFadeIn = {
  mounted: (el: HTMLElement) => {
    el.style.opacity = '0';
    setTimeout(() => {
      el.style.transition = 'opacity 0.75s ease-out 0.3s';
      el.style.opacity = '1';
    }, 100);
  }
};

// Placeholder for fadeIn("up", "spring", index * 0.5, 0.75)
const vMotionCardFadeIn = {
  mounted: (el: HTMLElement, binding: { value: { index: number } }) => {
    const index = binding.value.index;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)'; // "up" means from bottom
    setTimeout(() => {
      el.style.transition = `opacity 0.75s ease-out ${index * 0.3}s, transform 0.75s ease-out ${index * 0.3}s`; // Adjusted delay
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
  }
};

// Tailwind classes like 'padding', 'sectionSubText', 'sectionHeadText', 'bg-tertiary', 
// 'text-secondary', 'black-gradient', and tag colors (e.g., 'blue-text-gradient')
// are expected to be globally available from nuxt-app/assets/css/tailwind.css and tailwind.config.js.
</script>

<style scoped>
.hash-span {
  margin-top: -100px;
  padding-bottom: 100px;
  display: block;
}

/* Styling for card image hover effect if needed, e.g., a subtle zoom or overlay */
.card-img_hover div:hover {
  /* Example: slightly scale the github icon or change its background */
  transform: scale(1.1);
  transition: transform 0.2s ease-in-out;
}

/* Placeholder animations */
.animated-text-variant { /* For v-motion-text-variant */ }
.animated-fade-in { /* For v-motion-fade-in */ }
.animated-card-fade-in { /* For v-motion-card-fade-in */ }

/* Ensure custom gradients like 'black-gradient' and text color utilities like 'blue-text-gradient'
   are defined in your global CSS or Tailwind config.
   Example for black-gradient (if not using Tailwind's default black):
   .black-gradient {
     background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9));
   }
   The original project's black-gradient in globals.css was:
   background: #000000;
   background: -webkit-linear-gradient(to right, #434343, #000000);
   background: linear-gradient(to right, #434343, #000000);
   This should be available if globals.css was properly integrated.
*/
</style>
