import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
    base: '/machineheads-test/',
    plugins: [react({
        jsxRuntime: 'classic'
    })],
    resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            '@app': resolve(__dirname, './src/app'),
            '@pages': resolve(__dirname, './src/pages'),
            '@widgets': resolve(__dirname, './src/widgets'),
            '@features': resolve(__dirname, './src/features'),
            '@entities': resolve(__dirname, './src/entities'),
            '@shared': resolve(__dirname, './src/shared')
        }
    }
})