import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Garante que a busca dos arquivos ocorra na pasta relativa correta
});   