import { test, expect } from "@playwright/test";

test('update part of user post', async ({ request }) => {
    const response = await request.patch('/posts/1', {
        data: {
            title: 'Just an edited title'
        }
    })
    expect(response.ok()).toBeTruthy()
    expect(response.status()).toBe(200)
    expect(await response.json()).toEqual(expect.objectContaining({
        "title": "Just an edited title"
    }))
    console.log(await response.json())
})