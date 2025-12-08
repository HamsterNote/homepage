import { createI18n } from 'vue-i18n'
import zhCN from '@/locales/zh-CN.json'
import zhTW from '@/locales/zh-TW.json'
import enUS from '@/locales/en-US.json'

const saved = (typeof localStorage !== 'undefined' && localStorage.getItem('lang')) || ''

export const i18n = createI18n({
  legacy: false,
  locale: saved || navigator.language || 'zh-CN',
  fallbackLocale: 'en-US',
  messages: {
    'zh-CN': zhCN,
    'zh-TW': zhTW,
    'en-US': enUS
  }
})

export function setLocale(lang: 'zh-CN' | 'zh-TW' | 'en-US') {
  i18n.global.locale.value = lang
  try { localStorage.setItem('lang', lang) } catch {}
  const html = document.documentElement
  html.lang = lang
}
