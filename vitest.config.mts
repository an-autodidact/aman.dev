import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    dir: 'test/aman', // CHANGED: was 'test/unit' → renamed for your aman.dev project
    poolOptions: {
      threads: {
        maxThreads: 1,
        minThreads: 1,
      },
    },
  },
})
