import { test, expect } from '@playwright/test';

test.describe.parallel('API Test - POST', () => {
  const baseUrl = 'https://reqres.in/api';

  test('create new user 222', async ({ request }) => {
    const respons = await request.post(`${baseUrl}/users`, {
      data: {
        id: 222
      },
    });
    const responsBody = JSON.parse(await respons.text());
    expect(respons.status()).toBe(201);
    console.log(responsBody);
  });

  test('create new user 333', async ({ request }) => {
    const respons = await request.post(`${baseUrl}/users`, {
      data: {
        id: 333
      },
    });
    const responsBody = JSON.parse(await respons.text());
    expect(responsBody.id).toBe(333);
    expect(responsBody.createdAt).toBeTruthy();
  });

  test.only('create new user 539', async ({ request }) => {
    const respons = await request.post(`${baseUrl}/users`, {
      data:{
        id: 539,
        name: 'morpheus',
        job: 'leader'
      },
    });
    const responsBody = JSON.parse(await respons.text());
    expect(respons.status()).toBe(201);
    console.log(responsBody);
  })
});
