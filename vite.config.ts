import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'node:path';
import compression from 'vite-plugin-compression';
import strip from '@rollup/plugin-strip';

const plugins = [react(), svgr()];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    compression(),
    strip({
      include: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
      functions: ['console.*', 'assert.*', 'debug', 'alert'],
      debugger: true,
    })
  );
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
});
