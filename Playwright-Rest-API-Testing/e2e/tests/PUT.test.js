import { test, expect } from "@playwright/test";

test('update user post', async ({ request }) => {
    const response = await request.put('/posts/1', {
        data: {
            id: 1,
            title: 'Existing post',
            body: 'This is a post',
            userId: 1
        }
    })
    expect(response.ok()).toBeTruthy()
    expect(response.status()).toBe(200)
    expect(await response.json()).toEqual(expect.objectContaining({
        "id": 1,
        "title": "Existing post",
        "body": "This is a post",
        "userId": 1
    }))
    console.log(await response.json())
})

test('updat a user post that does not exist', async ({ request }) => {
    const response = await request.put('posts/199', {
        data: {
            id: 1,
            title: 'Not existing post',
            body: 'Some post',
            userId: 199
        }
    })
    expect(response.ok()).toBeFalsy()
    expect(response.status()).toBe(500)
    expect(response.statusText()).toEqual("Internal Server Error")
    expect(await response.text()).toContain("Cannot read properties of undefined (reading 'id')")
})