import { defineConfig } from '@vite-pwa/assets-generator/config';

export default defineConfig({
  preset: {
    transparent: {
      sizes: [64, 192, 512],
      favicons: [[64, 'favicon.ico']],
      resizeOptions: {
        background: '#104547',
      },
    },
    maskable: {
      sizes: [512],
      resizeOptions: {
        background: '#104547',
      },
    },
    apple: {
      sizes: [180],
      resizeOptions: {
        background: '#104547',
      },
    },
  },
  images: ['public/app-icon.png'],
});
