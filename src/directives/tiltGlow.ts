// Lightweight Vue 3 directive to add Apple TV-like card hover effects
// Features:
// - Mouse-follow radial glow (via CSS variables)
// - Subtle 3D tilt based on pointer position
// - Graceful disable on touch devices and small screens
// Usage: v-tilt-glow="{ tilt: 10, radius: 180 }"

import type { Directive } from 'vue'

type Opts = {
  tilt?: number // degrees max tilt
  radius?: number // px glow radius
}

const isTouch = () => typeof window !== 'undefined' && (
  'ontouchstart' in window || navigator.maxTouchPoints > 0
)

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n))

export const tiltGlow: Directive<HTMLElement, Opts | undefined> = {
  mounted(el, binding) {
    // Skip on touch devices to avoid performance issues
    if (isTouch()) return

    const opts: Required<Opts> = {
      // 调小默认幅度，用户未传入时更克制
      tilt: binding.value?.tilt ?? 6,
      radius: binding.value?.radius ?? 120,
    }

    let rect: DOMRect
    let frameId = 0
    let entered = false
    let px = 0, py = 0

    const updateRect = () => { rect = el.getBoundingClientRect() }
    updateRect()

    const onEnter = () => {
      entered = true
      el.style.setProperty('--glow-radius', `${opts.radius}px`)
      el.style.willChange = 'transform, background, box-shadow'
    }

    const onLeave = () => {
      entered = false
      cancelAnimationFrame(frameId)
      el.style.removeProperty('--mx')
      el.style.removeProperty('--my')
      el.style.removeProperty('--tiltX')
      el.style.removeProperty('--tiltY')
      el.style.removeProperty('--glow-radius')
      el.style.transform = ''
      el.style.willChange = ''
    }

    const animate = () => {
      // normalized center-based coordinates: -0.5..0.5
      const cx = px - rect.left
      const cy = py - rect.top
      const nx = clamp(cx / rect.width, 0, 1) - 0.5
      const ny = clamp(cy / rect.height, 0, 1) - 0.5

      // CSS variables for glow position in percent
      const glowX = clamp((cx / rect.width) * 100, 0, 100)
      const glowY = clamp((cy / rect.height) * 100, 0, 100)
      el.style.setProperty('--mx', `${glowX}%`)
      el.style.setProperty('--my', `${glowY}%`)

      // Tilt transform（方向反过来，让卡片朝着鼠标“俯冲”）
      const tiltX = (ny * 2) * opts.tilt
      const tiltY = (nx * -2) * opts.tilt
      el.style.setProperty('--tiltX', `${tiltX.toFixed(2)}deg`)
      el.style.setProperty('--tiltY', `${tiltY.toFixed(2)}deg`)
      el.style.transform = `perspective(900px) rotateX(var(--tiltX)) rotateY(var(--tiltY))`

      if (entered) frameId = requestAnimationFrame(animate)
    }

    const onMove = (e: MouseEvent) => {
      px = e.clientX
      py = e.clientY
    }

    const onResize = () => updateRect()

    // Listeners
    el.addEventListener('mouseenter', () => {
      updateRect(); onEnter(); frameId = requestAnimationFrame(animate)
    })
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    window.addEventListener('scroll', updateRect, { passive: true })
    window.addEventListener('resize', onResize)

    // Store cleanup on element
    ;(el as any).__tiltGlowCleanup__ = () => {
      onLeave()
      el.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', updateRect)
      window.removeEventListener('resize', onResize)
    }
  },
  unmounted(el) {
    const c = (el as any).__tiltGlowCleanup__
    if (c) c()
  }
}

export default tiltGlow
