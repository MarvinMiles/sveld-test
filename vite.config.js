import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveld from "./sveld-plugin"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), sveld()],
})
