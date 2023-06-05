import { test, expect } from '@playwright/test';

test.describe('API Testing - PATCH', () => {
  const baseUrl = 'https://reqres.in/api';

  test('PATCH - update user', async ({ request }) => {
    const respons = await request.patch(`${baseUrl}/users/2`, {
      data: {
        name: 'morpheus',
        job: 'zion resident',
      },
    });
    const responsBody = JSON.parse(await respons.text());

    expect(respons.status()).toBe(200);
    expect(responsBody.name).toBe('morpheus');
    expect(responsBody.job).toBe('zion resident');
    expect(responsBody.updatedAt).toBeTruthy();
    console.log(responsBody);
  });
});