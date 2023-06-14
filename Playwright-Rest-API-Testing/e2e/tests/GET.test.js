import { test, expect } from '@playwright/test'

test('retrieve user posts', async ({ request }) => {
    const response = await request.get('/posts')
    expect(response.ok()).toBeTruthy()
    expect(response.status()).toBe(200)
})