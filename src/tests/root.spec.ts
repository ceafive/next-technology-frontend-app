import supertest from "supertest";
import dotenv from "dotenv";
dotenv.config();
import app from "../app";
import config from "../config";

describe("root endpoint get and post", () => {
  afterEach(() => {
    process.env["NODE_ENV"] = "test";
  });

  test("test config", () => {
    expect(config.nodeEnv).toEqual("test");
    expect(config.port).toEqual("8000");
  });

  test("get root returns 200 and data", async () => {
    const result = await supertest(app).get("/health");
    expect(result.statusCode).toEqual(200);
    expect(result.body).toBeTruthy();
  });

  test("search for burna boy", async () => {
    const result = await supertest(app).get("/api/search?searchTerm=burna");
    expect(result.statusCode).toEqual(200);
    expect(result.body).toBeTruthy();
  });

  test("no search term", async () => {
    const result = await supertest(app).get("/api/search?searchTerm=");
    expect(result.statusCode).toEqual(400);
    expect(result.body.message).toBeTruthy();
    expect(result.body.success).toBeTruthy();
    expect(result.body.results).toHaveLength(0);
  });

  test("404 & json returned from nonexistent route", async () => {
    const result = await supertest(app).get("/badPath");
    expect(result.statusCode).toEqual(404);
    expect(result.body.message).toBeTruthy();
  });
});
