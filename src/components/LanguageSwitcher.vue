<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useI18n } from 'vue-i18n'
import { setLocale } from '@/plugins/i18n'

const { locale, t } = useI18n()
const current = ref(locale.value as 'zh-CN' | 'zh-TW' | 'en-US')

function change(lang: 'zh-CN' | 'zh-TW' | 'en-US') {
  current.value = lang
  setLocale(lang)
}

watchEffect(() => { document.documentElement.lang = current.value })
</script>

<template>
  <div class="lang">
    <span class="label">{{ t('lang.label') }}</span>
    <select :value="current" @change="change(($event.target as HTMLSelectElement).value as any)">
      <option value="zh-CN">{{ t('lang.zhCN') }}</option>
      <option value="zh-TW">{{ t('lang.zhTW') }}</option>
      <option value="en-US">{{ t('lang.enUS') }}</option>
    </select>
  </div>
</template>

<style scoped>
.lang {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
}
.label { opacity: .8; font-size: .9rem; }
select {
  background: transparent;
  color: inherit;
  border: 1px solid var(--ui-border);
  border-radius: 10px;
  padding: .3rem .6rem;
}
</style>
