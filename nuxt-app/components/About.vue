<template>
  <section :id="idName" class="padding max-w-7xl mx-auto relative z-0">
    <span class="hash-span" :id="idName">&nbsp;</span>

    <div v-motion-text-variant class="animated-text-variant">
      <p class="sectionSubText">Introduction</p>
      <h2 class="sectionHeadText">Overview.</h2>
    </div>

    <p
      v-motion-fade-in
      class="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] animated-fade-in"
    >
      I am a French student with a specialization in video game and web
      development. My diverse projects have provided me with extensive
      experience across various domains, utilizing tools like Unity, Unreal
      Engine, and Figma. Known for my meticulous approach and strong
      leadership skills in team settings, I am eager to contribute my
      expertise to enhance your project.
    </p>

    <div class="mt-20 flex flex-wrap gap-10">
      <div
        v-for="(service, index) in services"
        :key="service.title"
        class="xs:w-[250px] w-full animated-service-card"
        v-motion-service-card="{ index }"
      >
        <!-- Original react-tilt wrapper is omitted -->
        <div
          class="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            class="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img :src="service.icon" :alt="service.title" class="w-16 h-16 object-contain" />
            <h3 class="text-white text-[20px] font-bold text-center">
              {{ service.title }}
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Define idName for the section, similar to SectionWrapper
const idName = "about";

// Define services (adapted from data/content.jsx)
// Assuming icons will be in /assets/ and have .svg or .png extensions
// The original project used direct imports for assets.
const services = ref([
  {
    title: "Game Maker",
    icon: "/assets/game.png", // Placeholder path, confirm actual icon names/types
  },
  {
    title: "Frontend",
    icon: "/assets/web.png",   // Placeholder path
  },
  {
    title: "Web Design",
    icon: "/assets/design.png", // Placeholder path
  },
]);

// Placeholder directives for animations.
// These would be implemented using Vue's directive system or a library like VueUse.
// For now, they are just stubs and we'll add simple CSS animations.

// v-motion-text-variant (placeholder)
const vMotionTextVariant = {
  mounted: (el: HTMLElement) => {
    // Placeholder: Apply initial style for animation
    el.style.opacity = '0';
    el.style.transform = 'translateY(-20px)';
    // Trigger animation
    setTimeout(() => {
      el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100); // Small delay to ensure transition applies
  }
};

// v-motion-fade-in (placeholder)
const vMotionFadeIn = {
  mounted: (el: HTMLElement) => {
    el.style.opacity = '0';
    // Trigger animation
     setTimeout(() => {
      el.style.transition = 'opacity 0.75s ease-out 0.3s'; // delay 0.3s
      el.style.opacity = '1';
    }, 100);
  }
};

// v-motion-service-card (placeholder for fadeIn("right", "spring", 0.5 * index, 0.75))
const vMotionServiceCard = {
  mounted: (el: HTMLElement, binding: { value: { index: number } }) => {
    const index = binding.value.index;
    el.style.opacity = '0';
    el.style.transform = 'translateX(-20px)'; // "right" in fadeIn usually means from right, so translateX(20px)
                                            // but the original had -100 for right, so using -20px for a softer effect.
    setTimeout(() => {
      el.style.transition = `opacity 0.75s ease-out ${0.5 * index}s, transform 0.75s ease-out ${0.5 * index}s`;
      el.style.opacity = '1';
      el.style.transform = 'translateX(0)';
    }, 100);
  }
};

// Tailwind CSS classes like 'padding', 'sectionSubText', 'sectionHeadText', 'green-pink-gradient', 
// 'bg-tertiary', 'shadow-card', 'text-secondary' are expected to be globally available
// from nuxt-app/assets/css/tailwind.css and tailwind.config.js.
// The color 'tertiary' might need to be added to tailwind.config.js if not already present.
// Example: tertiary: '#151030' (based on common portfolio themes)
</script>

<style scoped>
/* Replicating hash-span behavior */
.hash-span {
  margin-top: -100px; /* Adjust as needed, from original globals.css */
  padding-bottom: 100px;
  display: block;
}

/* Basic placeholder animations */
/* These are illustrative and would be more robust with a proper animation library or more detailed CSS */

/* For v-motion-text-variant */
.animated-text-variant {
  /* Default state handled by directive, transition applied by directive */
}

/* For v-motion-fade-in */
.animated-fade-in {
  /* Default state handled by directive, transition applied by directive */
}

/* For v-motion-service-card */
.animated-service-card {
  /* Default state handled by directive, transition applied by directive */
}

/* Ensure custom gradients and colors like 'green-pink-gradient', 'bg-tertiary'
   are defined in your tailwind.config.js or global CSS.
   Example for green-pink-gradient if not already in globals.css:
   .green-pink-gradient {
     background: linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%);
   }
   Example for shadow-card:
   .shadow-card {
     box-shadow: 0px 35px 120px -15px #211e35; /* Example shadow */
   }
*/
</style>
