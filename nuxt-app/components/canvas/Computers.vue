<template>
  <TresCanvas v-if="renderCanvas" shadows :camera="cameraOptions" :gl="{ preserveDrawingBuffer: true }" window-size>
    <TresSuspense fallback="Loading...">
      <ComputersModel :is-mobile="isMobile" />
    </TresSuspense>
    <OrbitControls :enable-zoom="false" :max-polar-angle="Math.PI / 2" :min-polar-angle="Math.PI / 2" />
    <Preload all />
  </TresCanvas>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, shallowRef, defineAsyncComponent } from 'vue';
import { TresCanvas, useTresContext } from '@tresjs/core';
import { OrbitControls, Preload, useGLTF } from '@tresjs/cientos';

// Define camera options
const cameraOptions = {
  position: [20, 3, 5],
  fov: 25,
};

// State for mobile detection
const isMobile = ref(false);
// State to delay rendering of canvas until mounted (for window access)
const renderCanvas = ref(false);

// Async component for the model to leverage suspense
const ComputersModel = defineAsyncComponent(async () => {
  const { scene } = await useGLTF('/desktop_pc/scene.gltf'); // Path relative to public folder
  
  return {
    setup() {
      const { isMobile: modelIsMobile } = defineProps<{ isMobile: boolean }>();
      const modelRef = shallowRef(scene);

      return () => ( // Render function for the async component
        h('primitive', { // Using h for direct primitive rendering as in React Three Fiber
          object: modelRef.value,
          scale: modelIsMobile ? 0.7 : 0.75,
          position: modelIsMobile ? [0, -3, -2.2] : [0, -3.25, -1.5],
          rotation: [-0.01, -0.2, -0.1],
        }, [ // Children for lights, similar to the <mesh> wrapper in original
          h('hemisphereLight', { intensity: 1.5, groundColor: 'black' }),
          h('pointLight', { intensity: 1 }),
          h('spotLight', {
            position: [-20, 50, 10],
            angle: 0.12,
            penumbra: 1,
            intensity: 1,
            castShadow: true,
            'shadow-mapSize-width': 1024, // Props often kebab-case or direct in tres
            'shadow-mapSize-height': 1024,
          }),
        ])
      );
    },
    props: ['isMobile'] // Declare props for the async component
  };
});


// Media query handling
onMounted(() => {
  renderCanvas.value = true; // Enable canvas rendering only on client-side
  const mediaQuery = window.matchMedia("(max-width: 500px)");
  isMobile.value = mediaQuery.matches;

  const handleMediaQueryChange = (event: MediaQueryListEvent) => {
    isMobile.value = event.matches;
  };

  mediaQuery.addEventListener("change", handleMediaQueryChange);

  onUnmounted(() => {
    mediaQuery.removeEventListener("change", handleMediaQueryChange);
  });
});
</script>

<style scoped>
/* Scoped styles if needed */
</style>
