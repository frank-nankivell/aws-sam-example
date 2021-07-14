const lambda = require("../functions/example.js");

describe("tests", () => {
  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log");
  });
  it("should reject non GET request", async () => {
    const event = { httpMethod: "POST" };
    const expectedStatusCode = 405;
    const result = await lambda.handler(event);
    expect(result.statusCode).toBe(expectedStatusCode);
  });
  it("should succeed with GET request", async () => {
    const event = { httpMethod: "GET" };
    const expectedStatusCode = 200;
    const result = await lambda.handler(event);
    expect(result.statusCode).toBe(expectedStatusCode);
  });
});
