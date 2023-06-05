import { test, expect } from '@playwright/test';

test.describe('API Test - DELETE', () => {
  const baseUrl = 'https://reqres.in/api';

  test('DELETE - delete user', async ({ request }) => {
    const response = await request.delete(`${baseUrl}/users/2`);

    expect(response.status()).toBe(204);
  });
});
