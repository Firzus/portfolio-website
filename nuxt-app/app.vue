<template>
  <div>
    <Navbar />
    <NuxtPage />
    <!-- <NuxtRouteAnnouncer /> --> <!-- This can be kept or removed, depending on preference -->
  </div>
</template>

<script setup lang="ts">
// It's good practice to explicitly import components in Nuxt 3,
// although global auto-imports often work.
import Navbar from '~/components/Navbar.vue';
</script>

<style>
/* Global styles, including Tailwind base styles, should be set up */
/* For Tailwind, this is typically done by creating a CSS file (e.g., assets/css/tailwind.css) */
/* and importing it, or via the @nuxtjs/tailwindcss module which handles it. */

/* Example of global styles that might be needed: */
body {
  @apply bg-primary text-white; /* Assuming primary is a dark background */
  margin: 0;
  font-family: 'Poppins', sans-serif; /* Example font, ensure it's loaded */
}

/* Ensure Tailwind's base, components, and utilities are imported.
   If using @nuxtjs/tailwindcss, this is usually handled by the module.
   If not, you'd create an assets/css/main.css or similar:
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   And then import it in nuxt.config.ts or here.
*/
</style>
