import { test, expect } from "@playwright/test"

test('create user post', async ({ request }) => {
    const response = await request.post('/posts', {
        data: {
            title: 'New Post',
            body: 'This is a new post',
            userId: 1
        }
    })
    expect(response.status()).toBe(201)
    expect(await response.json()).toEqual(expect.objectContaining({
        "body": "This is a new post",
        "id": 101,
        "title": "New Post",
        "userId": 1
    }))
    console.log(await response.json())
})

test('create new user post', async ({ request }) => {
    const response = await request.post('/posts', {
        data: {
            userId: 34,
            id: 101,
            title: 'Another New Post',
            body: 'This is the second new post'
        }
    })
    expect(response.status()).toBe(201)
    expect(await response.json()).toEqual(expect.objectContaining({
        "userId": 34,
        "id": 101,
        "title": "Another New Post",
        "body": "This is the second new post"
    }))
    console.log(await response.json())
})

// https://jsonplaceholder.typicode.com/