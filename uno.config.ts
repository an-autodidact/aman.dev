import { defineConfig, presetUno, presetIcons } from 'unocss'
import { createResolver } from 'nuxt/kit'

const resolver = createResolver(import.meta.url)

export default defineConfig({
  // ✅ Update path if your markdown files differ (like ./docs or ./src/content)
  content: {
    filesystem: [resolver.resolve('./content/**/*.md')],
    pipeline: {
      exclude: ['**/@nuxt/content/**'],
    },
  },

  shortcuts: [
    {
      'underlined-link':
        'relative inline-block after:block after:my-[-0.5em] after:mx-[-0.25em] after:opacity-10 after:border-current after:content-empty after:duration-300 after:transition-border-color after:transition-opacity after:border-b-[0.5em] outline-none hover:after:opacity-35 active:after:opacity-35 focus:after:opacity-35',
    },
  ],

  variants: [
    {
      order: -10,
      match: matcher => {
        if (!matcher.startsWith('*:')) return matcher
        matcher = matcher.slice('*:'.length)
        const child = matcher.match(/(first|last):/)?.[1]
        if (child) {
          matcher = matcher.slice(child.length + 1)
          return {
            matcher,
            selector: s => `${s} > *:${child}-child`,
          }
        }
        return {
          matcher,
          selector: s => `${s} > *`,
        }
      },
    },
  ],

  theme: {
    colors: {
      primary: 'var(--primary)',
      accent: 'var(--accent)',
      muted: 'rgb(var(--muted) / var(--un-bg-opacity, 1))',
      background: 'var(--background)',
    },
    fontFamily: {
      sans: 'Barlow, system-ui, sans-serif',
      code: 'Fira Code',
      serif: 'Vollkorn, serif',
    },
  },

  // ✅ Updated presetIcons section with your actual Twitter & Threads info
  presets: [
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
      collections: {
        custom: {
          // 🐦 Updated Twitter (Autodidact8Jha)
          twitter: `<a href="https://twitter.com/Autodidact8Jha" target="_blank" aria-label="Aman Jha on Twitter"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="m1.93 1.93 4.732 6.744L1.93 14.07h.996l4.196-4.768 3.345 4.768h3.603L9.1 7.103l4.546-5.173H12.61L8.638 6.457 5.458 1.93Zm1.477.776h1.627l7.52 10.588H10.91Z" style="stroke:currentColor;stroke-width:.64"/></svg></a>`,
          
          // 💬 Updated Threads (amanj_1777)
          threads: `<a href="https://threads.net/@amanj_1777" target="_blank" aria-label="Aman Jha on Threads"><svg viewBox="0 0 192 192" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8
