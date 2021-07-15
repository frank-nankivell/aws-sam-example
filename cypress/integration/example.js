const baseURL = Cypress.env("api_URL");

context("First test", () => {
  // Test case 1
  it("check HelloWord", () => {
    const basePath = "/example";

    const options = {
      method: "GET",
      url: `${baseURL}${basePath}`,
      failOnStatusCode: false,
    };

    cy.request(options).then(({ status, body }) => {
      expect(status).to.eq(200);
    });
  });

  // Test case 2
  it("check Fail", () => {
    const basePath = "/xyz";

    const options = {
      method: "GET",
      url: `${baseURL}${basePath}`,
      failOnStatusCode: false,
    };

    cy.request(options).then(({ status, body }) => {
      expect(status).to.not.eq(500);
    });
  });
});
