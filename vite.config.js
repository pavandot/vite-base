/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

/** @type {import('vite').UserConfig} */
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: { port: '3010' },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
})
