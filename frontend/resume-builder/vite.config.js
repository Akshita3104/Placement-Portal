import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    root: '.', // Ensures Vite looks at the current directory
    build: {
        rollupOptions: {
            input: 'index.html', // Ensures the correct entry file
        },
    },
});
