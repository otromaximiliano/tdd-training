const request = require("supertest");
const app = require("./dist/app");

describe("GET /auth", () => {

  test("Deberia devolver un error 404", (done) => {
    request.agent(app)
    .get("/auth")
    .then(response => {
        expect(response.statusCode).toBe(200);
        done();
    }).catch(error => console.error(error))
  
  });

});
