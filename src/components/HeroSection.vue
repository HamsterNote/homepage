<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="hero section" aria-labelledby="hero-title">
    <div class="container grid cols-2">
      <div>
        <h1 id="hero-title">{{ t('hero.title') }}</h1>
        <p class="subtitle">{{ t('hero.subtitle') }}</p>
        <div class="cta">
          <a href="#platforms" class="btn primary">{{ t('hero.ctaDownload') }}</a>
          <a href="#features" class="btn">{{ t('hero.ctaPrimary') }}</a>
          <a href="https://github.com/SystemUI-js/multi-drag" target="_blank" rel="noreferrer" class="btn ghost">{{ t('hero.ctaSecondary') }}</a>
        </div>
      </div>
      <div aria-hidden="true">
        <div class="illustration card" v-tilt-glow="{ tilt: 8, radius: 200 }">
          <!-- simple illustrative blocks -->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta { display: flex; gap: .8rem; flex-wrap: wrap; }
</style>
