import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, '../src'),
        },
    },

    optimizeDeps: {
        include: [
            'react',
            'react-dom',
            'react/jsx-runtime',
            '@radix-ui/react-slot',
        ],
        exclude: [
            '@storybook/blocks',
        ],
    },

    build: {
        target: 'esnext',
        minify: 'esbuild',
        cssMinify: true,
        sourcemap: false,
        reportCompressedSize: false,
        chunkSizeWarningLimit: 1000,
    },

    server: {
        fs: {
            strict: false,
        },
    },

    esbuild: {
        logOverride: { 'this-is-undefined-in-esm': 'silent' },
        target: 'esnext',
        keepNames: false,
        minifyIdentifiers: true,
        minifySyntax: true,
        minifyWhitespace: true,
    },
});
