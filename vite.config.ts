import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'Running Calculator',
        short_name: 'Run Calculator',
        description: 'The calculator swiss-army knife for runners',
        theme_color: '#104547',
        display: 'standalone',
        orientation: 'portrait',
        lang: 'en',
        categories: ['productivity', 'utilities'],
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
        screenshots: [
          {
            src: 'screenshots/android-pace.png',
            label: 'Pace',
            sizes: '1334x2510',
            platform: 'android',
            type: 'image/png',
          },
          {
            src: 'screenshots/android-distance.png',
            label: 'Distance',
            sizes: '1334x2510',
            platform: 'android',
            type: 'image/png',
          },
          {
            src: 'screenshots/android-time.png',
            label: 'Time',
            sizes: '1334x2510',
            platform: 'android',
            type: 'image/png',
          },
          {
            src: 'screenshots/android-entry.png',
            label: 'Entry',
            sizes: '1334x2510',
            platform: 'android',
            type: 'image/png',
          },
          {
            src: 'screenshots/desktop-narrow-pace.png',
            label: 'Pace',
            sizes: '1224x1658',
            form_factor: 'narrow',
            type: 'image/png',
          },
          {
            src: 'screenshots/desktop-narrow-distance.png',
            label: 'Distance',
            sizes: '1224x1658',
            form_factor: 'narrow',
            type: 'image/png',
          },
          {
            src: 'screenshots/desktop-narrow-time.png',
            label: 'Time',
            sizes: '1224x1658',
            form_factor: 'narrow',
            type: 'image/png',
          },
          {
            src: 'screenshots/desktop-wide-pace.png',
            label: 'Pace',
            sizes: '2052x1306',
            form_factor: 'wide',
            type: 'image/png',
          },
          {
            src: 'screenshots/desktop-wide-distance.png',
            label: 'Distance',
            sizes: '2052x1306',
            form_factor: 'wide',
            type: 'image/png',
          },
          {
            src: 'screenshots/desktop-wide-time.png',
            label: 'Time',
            sizes: '2052x1306',
            form_factor: 'wide',
            type: 'image/png',
          },
          {
            src: 'screenshots/ios-pace.png',
            label: 'Pace',
            sizes: '1170x2532',
            platform: 'ios',
            type: 'image/png',
          },
          {
            src: 'screenshots/ios-distance.png',
            label: 'Distance',
            sizes: '1170x2532',
            platform: 'ios',
            type: 'image/png',
          },
          {
            src: 'screenshots/ios-time.png',
            label: 'Time',
            sizes: '1170x2532',
            platform: 'ios',
            type: 'image/png',
          },
          {
            src: 'screenshots/ios-entry.png',
            label: 'Entry',
            sizes: '1170x2532',
            platform: 'ios',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
