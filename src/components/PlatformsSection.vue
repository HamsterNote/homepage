<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const platforms = [
  { key: 'ios', icon: '' },
  { key: 'android', icon: '🤖' },
  { key: 'macos', icon: '' },
  { key: 'linux', icon: '🐧' },
  { key: 'windows', icon: '⊞' },
  { key: 'kindle', icon: '📚' }
]
</script>

<template>
  <section id="platforms" class="section">
    <div class="container">
      <h2 class="title">{{ t('platforms.title') }}</h2>

      <div class="grid cols-3">
        <div v-for="p in platforms" :key="p.key" class="card plat" v-tilt-glow>
          <div class="row">
            <span class="icon" aria-hidden="true">{{ p.icon }}</span>
            <strong>{{ t(`platforms.${p.key}`) }}</strong>
          </div>
          <div class="row">
            <a class="btn ghost" aria-disabled="true">Download</a>
            <span class="badge">{{ t('platforms.coming') }}</span>
          </div>
        </div>
      </div>
      <p class="muted" style="margin-top: 12px;">* {{ t('platforms.coming') }} — {{ t('brand') }} {{ t('brandEn') }}</p>
    </div>
  </section>
</template>

<style scoped>
.plat { display: flex; align-items: center; justify-content: space-between; }
.row { display: inline-flex; align-items: center; gap: .6rem; }
.icon { width: 28px; height: 28px; display: grid; place-items: center; background: rgba(255,255,255,.04); border: 1px solid var(--ui-border); border-radius: 8px; }
</style>
