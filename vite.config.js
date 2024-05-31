import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import zipPack from 'vite-plugin-zip-pack'; // 壓縮用
import dayjs from 'dayjs';

const todayString = dayjs().format('YYYYMMDDHHmm');

// https://vitejs.dev/config/
export default defineConfig({
  base: '/real-estate-map/',
  plugins: [
    react({
      babel: {
        plugins: [
          'babel-plugin-macros',
          [
            '@emotion/babel-plugin-jsx-pragmatic',
            {
              export: 'jsx',
              import: '__cssprop',
              module: '@emotion/react',
            },
          ],
        ],
      },
    }),
    zipPack({
      inDir: 'dist',
      outDir: 'build-zip',
      outFileName: `active-${todayString}.zip`,
    }),
    svgr(),
  ],
});
