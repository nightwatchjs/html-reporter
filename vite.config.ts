import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

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
    viteSingleFile()
  ]
});
