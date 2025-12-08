<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <footer class="footer">
    <div class="container" style="display:flex; align-items:center; justify-content:space-between; gap: 1rem; flex-wrap: wrap;">
      <div class="brand" style="opacity:.9;">
        <img class="logo" src="/favicon.svg" alt="logo" />
        <span>{{ t('brand') }}</span>
      </div>
      <div class="muted">{{ t('footer.made') }} · {{ t('footer.rights') }}</div>
    </div>
  </footer>
</template>

<style scoped>
</style>
