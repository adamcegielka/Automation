import { test, expect } from '@playwright/test';

test.describe.parallel('API Test - POST', () => {
  const baseUrl = 'https://reqres.in/api';

  test('create new user 222', async ({ request }) => {
    const respons = await request.post(`${baseUrl}/users`, {
      data: {
        id: 222,
      },
    });
    const responsBody = JSON.parse(await respons.text());

    expect(respons.status()).toBe(201);
    console.log(responsBody);
  });

  test('create new user 333', async ({ request }) => {
    const respons = await request.post(`${baseUrl}/users`, {
      data: {
        id: 333,
      },
    });
    const responsBody = JSON.parse(await respons.text());

    expect(responsBody.id).toBe(333);
    expect(responsBody.createdAt).toBeTruthy();
  });

  test('create new user 539', async ({ request }) => {
    const respons = await request.post(`${baseUrl}/users`, {
      data: {
        id: 539,
        name: 'morpheus',
        job: 'leader',
      },
    });
    const responsBody = JSON.parse(await respons.text());

    expect(respons.status()).toBe(201);
    console.log(responsBody);
  });

  test('register - successful', async ({ request }) => {
    const respons = await request.post(`${baseUrl}/register`, {
      data: {
        email: 'eve.holt@reqres.in',
        password: 'pistol',
      },
    });
    const responsBody = JSON.parse(await respons.text());

    expect(respons.status()).toBe(200);
    expect(responsBody.id).toBe(4);
    expect(responsBody.token).toBe('QpwL5tke4Pnpja7X4');
    console.log(responsBody); // { id: 4, token: 'QpwL5tke4Pnpja7X4' }
  });

  test('register - unsuccessful', async ({ request }) => {
    const respons = await request.post(`${baseUrl}/register`, {
      data: {
        email: 'sydney@fife',
      },
    });
    const responsBody = JSON.parse(await respons.text());

    expect(respons.status()).toBe(400);
    expect(responsBody.error).toBe('Missing password');
    console.log(responsBody);
  });

  test('login - successful', async ({ request }) => {
    const respons = await request.post(`${baseUrl}/login`, {
      data: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      },
    });
    const responsBody = JSON.parse(await respons.text());

    expect(respons.status()).toBe(200);
    expect(responsBody.token).toBe('QpwL5tke4Pnpja7X4');
    console.log(responsBody);
  });
});
