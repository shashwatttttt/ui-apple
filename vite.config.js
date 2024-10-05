import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/deploy-github/",
  plugins: [react(), sentryVitePlugin({
    org: "hackersvilla-cybersecurity-pvt",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})