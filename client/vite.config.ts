import react from '@vitejs/plugin-react'

import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    return {
        define: {
            'process.env': env
        },
        plugins: [react()],
        resolve: {
            alias: {
                '@': '/src',
                "public": "/public",
            },
        },
        build: {
            minify: 'terser',
            chunkSizeWarningLimit: 2000,
            publicDir: '/public',
            sourcemap: true
        }
    }
})