import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { resolve } from 'path';
import { bundleVrt } from './bundle';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              fileName: true,
              meaninglessFileNames: ['index', 'styles', 'style'],
              pure: true
            }
          ]
        ]
      }
    }),
    viteSingleFile(),
    // Plugin to bundle report.json during dev run
    bundleVrt()
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
