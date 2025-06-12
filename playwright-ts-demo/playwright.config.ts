import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://reqres.in',
    headless: true,
  },
  reporter: [['html', { open: 'never' }]],
});
