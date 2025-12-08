<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

const { t } = useI18n()
</script>

<template>
  <header class="header">
    <div class="container inner">
      <a href="#" class="brand">
        <img class="logo" src="/favicon.svg" alt="logo" />
        <span>{{ t('brand') }}</span>
      </a>
      <nav class="nav">
        <a href="#features">{{ t('nav.features') }}</a>
        <a href="#platforms">{{ t('nav.platforms') }}</a>
        <a href="#testimonials">{{ t('nav.testimonials') }}</a>
        <a href="https://github.com/SystemUI-js/multi-drag" target="_blank" rel="noreferrer">{{ t('nav.github') }}</a>
      </nav>
      <LanguageSwitcher />
    </div>
  </header>
</template>

<style scoped>
.nav { display: none; gap: 1rem; }
@media (min-width: 820px){ .nav { display: inline-flex; } }
.nav a { color: var(--muted); }
.nav a:hover { color: var(--text); }
</style>
