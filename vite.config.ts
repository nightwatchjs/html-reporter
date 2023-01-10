import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { bundle } from './bundle';
import nightwatchPlugin from 'vite-plugin-nightwatch';

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
    bundle(),
    nightwatchPlugin({
      componentType: 'react'
    })
  ],
  build: {
    outDir: process.env.VITE_PRODUCT
  }
});
