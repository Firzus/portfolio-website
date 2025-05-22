<template>
  <TresCanvas v-if="renderCanvas" shadows frameloop="demand" :gl="{ preserveDrawingBuffer: true }" :camera="{ fov: 45 }">
    <TresSuspense fallback="Loading...">
      <Float :speed="1.75" :rotation-intensity="1" :float-intensity="2">
        <TresAmbientLight :intensity="2.5" />
        <TresDirectionalLight :position="[0, 0, 0.05]" />
        <TresMesh :scale="2.75" cast-shadow receive-shadow>
          <TresIcosahedronGeometry :args="[1, 1]" />
          <TresMeshStandardMaterial
            color="#fff8eb"
            :polygon-offset="true"
            :polygon-offset-factor="-5"
            :flat-shading="true"
          />
          <Decal
            v-if="texture"
            :map="texture"
            :position="[0, 0, 1]"
            :rotation="[2 * Math.PI, 0, 6.25]"
            :flat-shading="true"
          />
        </TresMesh>
      </Float>
    </TresSuspense>
    <OrbitControls :enable-zoom="false" />
    <Preload all />
  </TresCanvas>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, shallowRef } from 'vue';
import { TresCanvas } from '@tresjs/core';
import { OrbitControls, Preload, useTexture, Float, Decal } from '@tresjs/cientos';
import type { Texture } from 'three';

const props = defineProps<{
  iconUrl: string;
}>();

const texture = shallowRef<Texture | null>(null);
const renderCanvas = ref(false); // To prevent SSR issues with canvas

onMounted(async () => {
  renderCanvas.value = true;
  if (props.iconUrl) {
    try {
      // useTexture returns a promise that resolves to the texture(s)
      const loadedTexture = await useTexture({ map: props.iconUrl });
      texture.value = loadedTexture.map; // Assuming 'map' is the key for single texture
    } catch (error) {
      console.error("Failed to load texture:", props.iconUrl, error);
      // Handle texture loading error, e.g., set a default texture or display an error
    }
  }
});

// Watch for prop changes if the component might be reused with different icons
watch(() => props.iconUrl, async (newUrl) => {
  if (newUrl) {
    try {
      const loadedTexture = await useTexture({ map: newUrl });
      texture.value = loadedTexture.map;
    } catch (error) {
      console.error("Failed to load texture on prop change:", newUrl, error);
    }
  } else {
    texture.value = null;
  }
});

</script>

<style scoped>
/* Scoped styles if needed */
</style>
