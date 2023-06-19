import { test, expect } from '@playwright/test'

test.describe('restful-booker', () => {
  const baseUrl = 'https://restful-booker.herokuapp.com';

    test('Booking - GetBookingIds', async ({ request }) => {
        const response = await request.get(`${baseUrl}/booking`);
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        console.log(await response.json());
    });
});


/*
https://restful-booker.herokuapp.com/

API documentation for the playground API restful-booker:
https://restful-booker.herokuapp.com/apidoc/index.html

*/