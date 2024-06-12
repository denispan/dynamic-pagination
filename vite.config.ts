import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {getBasePath} from './src/utils/system/get-base-path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  base: getBasePath(),
})
