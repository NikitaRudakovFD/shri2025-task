import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
    plugins: [
        viteSingleFile(),
        react(),
    ],
    resolve: {
        alias: {
            react: 'preact/compat',
            'react-dom': 'preact/compat',
        },
    },
    build: {
        target: 'esnext',
        cssTarget: 'chrome61',
        assetsInlineLimit: 100000000, // большие лимиты
        rollupOptions: {
            output: {
                inlineDynamicImports: true,
                manualChunks: undefined,
            },
        },
    },
});
