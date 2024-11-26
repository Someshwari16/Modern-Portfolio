import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // If necessary, you can configure a proxy to fetch images from Google Drive
    },
  },
});
