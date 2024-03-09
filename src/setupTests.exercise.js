import {server} from 'test/server'
// this isn't used in the solution. Only in the extra credit

// 🐨 add a beforeAll to start the server with `server.listen()`
beforeAll(() => server.listen())
// 🐨 add an afterAll to stop the server when `server.close()`
afterAll(() => server.close())
// 🐨 afterEach test, reset the server handlers to their original handlers
// via `server.resetHandlers()`
afterEach(() => server.resetHandlers())
