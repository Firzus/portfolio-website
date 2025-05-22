<template>
  <section :id="idName" class="padding max-w-7xl mx-auto relative z-0">
    <span class="hash-span" :id="idName">&nbsp;</span>

    <div class="flex flex-row flex-wrap justify-center gap-10">
      <div
        v-for="technology in technologies"
        :key="technology.name"
        class="w-28 h-28"
      >
        <ClientOnly>
          <BallCanvas :icon-url="technology.icon" />
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// It's good practice to explicitly import components in Nuxt 3,
// although global auto-imports often work.
// ClientOnly is auto-imported by Nuxt 3.
import BallCanvas from '~/components/canvas/Ball.vue';

// Define idName for the section, similar to SectionWrapper
// Tech section doesn't have a specific ID in the original navLinks,
// so we can leave it empty or assign a generic one if needed for navigation.
const idName = "tech"; // Or simply "" if not a navigation target

// Define technologies (adapted from data/content.jsx)
// Placeholder paths for icons - these should point to actual files in /public/assets/tech/
const technologies = ref([
  {
    name: "React",
    icon: "/assets/tech/reactjs.png",
  },
  {
    name: "Tailwind",
    icon: "/assets/tech/tailwind.png",
  },
  {
    name: "C++",
    icon: "/assets/tech/cpp.png",
  },
  {
    name: "C#",
    icon: "/assets/tech/csharp.png",
  },
  {
    name: "Unity",
    icon: "/assets/tech/unity.png",
  },
  {
    name: "Unreal Engine",
    icon: "/assets/tech/unreal_engine.png",
  },
  // Add other technologies if they were present in the original data
  // { name: "HTML 5", icon: "/assets/tech/html.png" },
  // { name: "CSS 3", icon: "/assets/tech/css.png" },
  // { name: "JavaScript", icon: "/assets/tech/javascript.png" },
  // { name: "TypeScript", icon: "/assets/tech/typescript.png" },
  // { name: "Node JS", icon: "/assets/tech/nodejs.png" },
  // { name: "MongoDB", icon: "/assets/tech/mongodb.png" },
  // { name: "Git", icon: "/assets/tech/git.png" },
  // { name: "Figma", icon: "/assets/tech/figma.png" },
  // { name: "Docker", icon: "/assets/tech/docker.png" },
]);

// Tailwind CSS classes like 'padding' are expected to be globally available.
</script>

<style scoped>
/* Replicating hash-span behavior if needed, though Tech section usually doesn't have one */
.hash-span {
  margin-top: -100px; 
  padding-bottom: 100px;
  display: block;
}
</style>
