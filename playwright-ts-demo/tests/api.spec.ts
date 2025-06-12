import { test, expect, request } from '@playwright/test';

test('GET user from API with x-api-key', async () => {
  const context = await request.newContext({
    extraHTTPHeaders: {
      'x-api-key': 'reqres-free-v1',
      'Accept': 'application/json',
      'User-Agent': 'PlaywrightTest'
    }
  });

  const response = await context.get('https://reqres.in/api/users/2');

  console.log('Status:', response.status());
  const body = await response.text();
  console.log('Body:', body);

  expect(response.status()).toBe(200);

  const data = JSON.parse(body);
  expect(data.data.email).toBe('janet.weaver@reqres.in');
});