const express = require("express");
const request = require("supertest");
const app = require("../../app");
const db = require("../../db");

describe("App Router Tests", () => {
  let server, agent;

  beforeEach((done) => {
    server = app.listen(4000, (err) => {
      if (err) return done(err);

      agent = request.agent(server);
      done();
    });
  });

  afterEach((done) => {
    server.close(done);
  });

  afterAll(() => {
    if (db.end) db.end();
  });

  describe("/", () => {
    test("GET - 200", () => {
      return request(app).get("/").expect(200);
    });
    test("PATCH - 405", () => {
      return request(app).patch("/").expect(405);
    });
    test("POST - 405", () => {
      return request(app).post("/").expect(405);
    });
    test("PUT - 405", () => {
      return request(app).put("/").expect(405);
    });
    test("DELETE - 405", () => {
      return request(app).delete("/").expect(405);
    });
  });

  describe("/timesheet", () => {
    test("GET - 200", () => {
      return request(server)
        .get("/timesheet")
        .expect(200)
        .then((something) => expect(something).toBe(something));
    });
    test("PATCH - 405", () => {
      return request(app).patch("/timesheet").expect(405);
    });
    test("POST - 405", () => {
      return request(app).post("/timesheet").expect(405);
    });
    test("PUT - 405", () => {
      return request(app).put("/timesheet").expect(405);
    });
    test("DELETE - 405", () => {
      return request(app).delete("/timesheet").expect(405);
    });
  });

  describe("/pokemon", () => {
    test("GET - 200", () => {
      return request(app).get("/pokemon").expect(200);
    });
    test("PATCH - 405", () => {
      return request(app).patch("/pokemon").expect(405);
    });
    test("POST - 405", () => {
      return request(app).post("/pokemon").expect(405);
    });
    test("PUT - 405", () => {
      return request(app).put("/pokemon").expect(405);
    });
    test("DELETE - 405", () => {
      return request(app).delete("/pokemon").expect(405);
    });
  });

  describe("/ac", () => {
    test("GET - 200", () => {
      return request(app).get("/ac").expect(200);
    });
    test("PATCH - 405", () => {
      return request(app).patch("/ac").expect(405);
    });
    test("POST - 405", () => {
      return request(app).post("/ac").expect(405);
    });
    test("PUT - 405", () => {
      return request(app).put("/ac").expect(405);
    });
    test("DELETE - 405", () => {
      return request(app).delete("/ac").expect(405);
    });
  });
});
