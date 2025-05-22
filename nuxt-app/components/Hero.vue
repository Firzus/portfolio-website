<template>
  <section class='relative w-full h-screen mx-auto'>
    <div class="paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5">
      <div class='flex flex-col justify-center items-center mt-5'>
        <div class='w-5 h-5 rounded-full bg-[#915eff]' />
        <div class='w-1 sm:h-80 h-40 violet-gradient' />
      </div>

      <div>
        <h1 class="heroHeadText text-white">
          Hi, I'm <span class='text-[#915eff]'>Lilian</span>
        </h1>
        <p class="heroSubText mt-2 text-white-100">
          I develop video games, websites,<br class='sm:block hidden' /> and I also do interface design.
        </p>
      </div>
    </div>

    <!-- Placeholder for ComputersCanvas -->
    <ClientOnly>
      <ComputersCanvas />
    </ClientOnly>

    <div class='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
      <a href="#about">
        <div class='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
          <!-- 
            Replace with Vue-specific animation. 
            For now, a simple CSS animation or a placeholder.
            Using a simple CSS class for the animation for now.
          -->
          <div
            class='w-3 h-3 rounded-full bg-secondary mb-1 motion-div-placeholder'
          />
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
// Import ComputersCanvas once it's created
import ComputersCanvas from '~/components/canvas/Computers.vue';
// It's good practice to wrap client-side only components with <ClientOnly> in Nuxt
// import { ClientOnly } from '#components'; // Nuxt auto-imports ClientOnly

// If using a Vue animation library like VueUse/motion:
// import { Motion } from '@vueuse/motion'
</script>

<style scoped>
/* Placeholder for Framer Motion-like animation */
.motion-div-placeholder {
  animation: bounceY 1.5s infinite;
}

@keyframes bounceY {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(24px);
  }
}

/* Styles from globals.css like heroHeadText, heroSubText, paddingX, violet-gradient 
   are expected to be available globally from nuxt-app/assets/css/tailwind.css */
</style>
