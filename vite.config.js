import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/Trekoria_React/', // repo name
  plugins: [react()],
});

