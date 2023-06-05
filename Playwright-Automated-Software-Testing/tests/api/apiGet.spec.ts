import { test, expect } from '@playwright/test';

test.describe.parallel('API Testing', () => {
  const baseUrl = 'https://reqres.in/api';

  test('List users', async ({ request }) => {
    const response = await request.get(`${baseUrl}/users`);
    expect(response.status()).toBe(200);

    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);
  });

  test('Single user', async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/2`);
    expect(response.status()).toBe(200);

    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);
  });

  test('Single uset not found', async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/23`);
    expect(response.status()).toBe(404);

    const responseBody = JSON.parse(await response.text());
    console.log(responseBody);
  });

  test('Get user detail', async ({ request }) => {
    const response = await request.get(`${baseUrl}/users/3`);
    const responseBody = JSON.parse(await response.text());

    expect(response.status()).toBe(200);
    expect(responseBody.data.id).toBe(3);
    expect(responseBody.data.first_name).toBe('Emma');
    expect(responseBody.data.last_name).toBe('Wong');
    expect(responseBody.data.email).toBeTruthy();
    console.log(responseBody);
  });

  test('List <resource>', async ({ request }) => {
    const response = await request.get(`${baseUrl}/unknown`);
    const responseBody = JSON.parse(await response.text());

    expect(response.status()).toBe(200);
    console.log(responseBody);
  });

  test('Single <resource>', async ({ request }) => {
    const response = await request.get(`${baseUrl}/unknown/2`);
    const responseBody = JSON.parse(await response.text());

    expect(response.status()).toBe(200);
    console.log(responseBody);
  });
});
