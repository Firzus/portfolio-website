<template>
  <nav :class="`paddingX w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? 'bg-primary' : 'bg-transparent'}`">
    <div class='w-full flex justify-between items-center max-w-7xl mx-auto'>
      <NuxtLink
        to="/"
        class='flex items-center gap-2'
        @click="() => {
          active = '';
          window.scrollTo(0, 0);
        }"
      >
        <img
          src="/assets/logo.svg" 
          alt='logo'
          class='w-9 h-9 object-contain'
        />
        <p class='text-white text-[18px] font-bold cursor-pointer flex'>
          Lilian &nbsp;
          <span class='sm:block hidden'>Prieu</span>
        </p>
      </NuxtLink>

      <ul class='list-none hidden sm:flex flex-row gap-10'>
        <li
          v-for="link in navLinks"
          :key="link.id"
          :class="`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`"
          @click="active = link.title"
        >
          <a :href="`#${link.id}`">{{ link.title }}</a>
        </li>
      </ul>

      <div class='sm:hidden flex flex-1 justify-end items-center'>
        <img
          :src="toggle ? '/assets/close.svg' : '/assets/menu.svg'"
          alt='menu'
          class='w-[28px] h-[28px] object-contain cursor-pointer'
          @click="toggle = !toggle"
        />

        <div :class="`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`">
          <ul class='list-none flex justify-end items-start flex-col gap-4'>
            <li
              v-for="link in navLinks"
              :key="link.id"
              :class="`${active === link.title ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`"
              @click="() => {
                toggle = !toggle;
                active = link.title;
              }"
            >
              <a :href="`#${link.id}`">{{ link.title }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Define navLinks (adapted from data/content.jsx)
const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'education', title: 'Education' },
  { id: 'work', title: 'Work' },
  { id: 'contact', title: 'Contact' },
];

const active = ref('');
const toggle = ref(false);
const scrolled = ref(false); // Added for background change on scroll

const handleScroll = () => {
  const scrollTop = window.scrollY;
  if (scrollTop > 100) {
    scrolled.value = true;
  } else {
    scrolled.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  // Initialize scrolled state based on current scroll position
  handleScroll(); 
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Component-specific styles can go here if needed */
/* black-gradient is a custom class from the original project, ensure it's defined globally or imported via Tailwind config */
.black-gradient {
  background: linear-gradient(180deg, #00000080 0%, #000000E6 100%); /* Example gradient, adjust as needed */
}

/* paddingX is likely a utility class, ensure it's defined in global styles or Tailwind config */
.paddingX {
  padding-left: 1.5rem; /* 24px */
  padding-right: 1.5rem; /* 24px */
}
/* text-secondary and bg-primary are likely custom colors, ensure they are defined in tailwind.config.js */
/* For example:
  theme: {
    extend: {
      colors: {
        primary: '#050816', // Example color
        secondary: '#aaa6c3', // Example color
      },
    },
  },
*/
</style>
