import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** @type {import('vite').UserConfig} */
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: { port: '3010' },
})
