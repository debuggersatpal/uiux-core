import { defineConfig } from 'tsup';
import fs from 'node:fs';

export default defineConfig({
  entry: ['src/index.ts', 'src/styles/main.css'],
  format: ['esm', 'cjs'],
  splitting: true,
  dts: true,
  clean: true,
  outExtension({ format }) {
    if (format === 'cjs') return { js: '.cjs' };
    if (format === 'esm') return { js: '.js' };
    return { js: '.js' };
  },
  async onSuccess() {
    if (fs.existsSync('dist/styles/main.css')) {
      fs.renameSync('dist/styles/main.css', 'dist/styles.css');
      fs.rmSync('dist/styles', { recursive: true, force: true });
    }
  }
});
