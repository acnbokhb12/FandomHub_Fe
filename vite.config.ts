import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import * as path from 'path'; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      src: path.resolve(__dirname, './src'),
      assets : path.resolve(__dirname, './src/assets'),
      components: path.resolve(__dirname, './src/components'),
      hooks: path.resolve(__dirname, './src/hooks'),
      layouts: path.resolve(__dirname, './src/layouts'),
      pages: path.resolve(__dirname, './src/pages'),
      router: path.resolve(__dirname, './src/router'),
      services: path.resolve(__dirname, './src/services'),
      types: path.resolve(__dirname, './src/types'),
      utils: path.resolve(__dirname, './src/utils')
    }
  }
})
