import { test, expect } from '@playwright/test';

test.describe.parallel('API Testing', () => {
  const baseUrl = 'https://reqres.in/api';

  test('Simple API Test - Assert Respons Status', async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/2`);
    expect(response.status()).toBe(200);
  });
});
