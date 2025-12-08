<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section id="features" class="section">
    <div class="container">
      <h2 class="title">{{ t('features.title') }}</h2>
      <div class="grid cols-3">
        <article class="card" v-tilt-glow>
          <h3>{{ t('features.ease.title') }}</h3>
          <p class="muted">{{ t('features.ease.desc') }}</p>
        </article>
        <article class="card" v-tilt-glow>
          <h3>{{ t('features.praise.title') }}</h3>
          <p class="muted">{{ t('features.praise.desc') }}</p>
        </article>
        <article class="card" v-tilt-glow>
          <h3>{{ t('features.storage.title') }}</h3>
          <p class="muted">{{ t('features.storage.desc') }}</p>
        </article>
      </div>
      <div class="card" v-tilt-glow style="margin-top:20px; display:flex; align-items:center; justify-content:space-between; gap: 1rem; flex-wrap: wrap;">
        <div>
          <h3 style="margin:0 0 6px;">{{ t('features.multitouch.title') }}</h3>
          <p class="muted" style="margin:0;">{{ t('features.multitouch.desc') }}</p>
        </div>
        <a class="btn" href="https://github.com/SystemUI-js/multi-drag" target="_blank" rel="noreferrer">{{ t('features.multitouch.link') }}</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
h3 { margin: 0 0 8px; }
</style>
