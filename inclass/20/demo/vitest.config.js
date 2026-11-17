import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/books': 'http://localhost:3000',
      '/authors': 'http://localhost:3000',
      '/reviews': 'http://localhost:3000',
      '/summaries': 'http://localhost:3000',
      '/jackets': 'http://localhost:3000',
    },
  },
});