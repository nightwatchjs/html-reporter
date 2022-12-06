import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-styled-components']]
      }
    }),
    viteSingleFile()
  ],
  base: "",
  build: {
    rollupOptions: {
      input: {
        vrt: resolve(__dirname, 'index_vrt.html'),
      },
      output: {
          name: "vrt"
        }
    },
  },
});
