<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n()
const items = tm('testimonials.items') as string[]
</script>

<template>
  <section id="testimonials" class="section">
    <div class="container">
      <h2 class="title">{{ t('testimonials.title') }}</h2>
      <div class="grid cols-3">
        <blockquote v-for="(q, i) in items" :key="i" class="card quote" v-tilt-glow>
          <p>“{{ q }}”</p>
        </blockquote>
      </div>
    </div>
  </section>

</template>

<style scoped>
.quote p { margin: 0; }
</style>
