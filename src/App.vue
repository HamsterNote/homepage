<script setup lang="ts">
import HeaderBar from '@/components/HeaderBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import PlatformsSection from '@/components/PlatformsSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
  <div class="app">
    <HeaderBar />
    <main>
      <HeroSection />
      <FeaturesSection />
      <PlatformsSection />
      <TestimonialsSection />
    </main>
    <SiteFooter />
  </div>

</template>

<style scoped>
.app { min-height: 100vh; display: flex; flex-direction: column; }
main { flex: 1; }
</style>
