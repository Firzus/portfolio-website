<template>
  <section :id="idName" class="relative z-0"> <!-- SectionWrapper adds padding, so apply it to inner div if needed -->
    <span class="hash-span" :id="idName">&nbsp;</span>

    <div class="mt-12 bg-black-100 rounded-[20px]">
      <div class="padding bg-tertiary rounded-2xl min-h-[300px]">
        <div v-motion-text-variant class="animated-text-variant">
          <p class="sectionSubText">What others say</p>
          <h2 class="sectionHeadText">Testimonials.</h2>
        </div>
      </div>

      <div class="paddingX -mt-20 pb-14 flex flex-wrap gap-7 justify-center">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.name"
          v-motion-card-fade-in="{ index }"
          class="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full animated-card-fade-in"
        >
          <p class="text-white font-black text-[48px]">"</p>

          <div class="mt-1">
            <p class="text-white tracking-wider text-[18px]">{{ testimonial.testimonial }}</p>

            <div class="mt-7 flex justify-between items-center gap-1">
              <div class="flex-1 flex flex-col">
                <p class="text-white font-medium text-[16px]">
                  <span class="blue-text-gradient">@</span> {{ testimonial.name }}
                </p>
                <p class="mt-1 text-secondary text-[12px]">
                  {{ testimonial.designation }} of {{ testimonial.company }}
                </p>
              </div>

              <img
                v-if="testimonial.image"
                :src="testimonial.image"
                :alt="`feedback-by-${testimonial.name}`"
                class="w-10 h-10 rounded-full object-cover"
              />
              <div v-else class="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs">
                N/A <!-- Placeholder for when image is null -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Define idName for the section, similar to SectionWrapper
// Feedbacks section doesn't have a specific ID in the original navLinks,
// so we can leave it empty or assign a generic one if needed for navigation.
const idName = "feedbacks"; // Or ""

// Define testimonials (adapted from data/content.jsx)
// Placeholder paths for images - these should point to actual files in /public/assets/testimonials/
const testimonials = ref([
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "/assets/testimonials/sara_lee.png", // Example path, adjust if actual images are available
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "/assets/testimonials/chris_brown.png", // Example path
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "/assets/testimonials/lisa_wang.png", // Example path
  },
  // The original data had image: null, so providing some examples with placeholder paths
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

// Placeholder for fadeIn("", "spring", index * 0.5, 0.75)
const vMotionCardFadeIn = {
  mounted: (el: HTMLElement, binding: { value: { index: number } }) => {
    const index = binding.value.index;
    el.style.opacity = '0';
    // No specific direction for fadeIn("", ...), so just fade in
    // If a direction like "up" was intended for cards: el.style.transform = 'translateY(20px)';
    setTimeout(() => {
      el.style.transition = `opacity 0.75s ease-out ${index * 0.3}s`; // Adjusted delay
      el.style.opacity = '1';
      // if direction "up": el.style.transform = 'translateY(0)';
    }, 100);
  }
};

// Tailwind CSS classes like 'padding', 'paddingX', 'sectionSubText', 'sectionHeadText', 
// 'bg-tertiary', 'bg-black-100', 'bg-black-200', 'text-secondary', 'blue-text-gradient'
// are expected to be globally available from nuxt-app/assets/css/tailwind.css and tailwind.config.js.
</script>

<style scoped>
/* Replicating hash-span behavior if SectionWrapper's idName was used for navigation */
.hash-span {
  margin-top: -100px; 
  padding-bottom: 100px;
  display: block;
}

/* Placeholder animations */
.animated-text-variant { /* For v-motion-text-variant */ }
.animated-card-fade-in { /* For v-motion-card-fade-in */ }

/* padding, paddingX, sectionSubText, sectionHeadText, bg-tertiary, bg-black-100, 
   bg-black-200, text-secondary, blue-text-gradient are defined in global styles or Tailwind config.
   The SectionWrapper in the original added 'padding max-w-7xl mx-auto relative z-0' to the section.
   My top-level section here is just 'relative z-0'. The 'padding' class is on the inner div.
   This matches the original structure where the outer div is for background and the inner for padded content.
*/
</style>
