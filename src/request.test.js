const request = require("./request");

test('test request', async () => {
  const res = await request();
  expect(res.status).toBe(200);
})
