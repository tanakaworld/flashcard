import { basicAuth } from "~/middlewares/basic-auth";

const generateAuthString = (user: string, pw: string) =>
  `Basic ${Buffer.from(`${user}:${pw}`).toString("base64")}`;

describe("basicAuth", function () {
  beforeEach(() => {
    process.env.BASIC_AUTH_USER = "admin";
    process.env.BASIC_AUTH_PW = "12345";
  });

  afterEach(() => {
    process.env.BASIC_AUTH_USER = undefined;
    process.env.BASIC_AUTH_PW = undefined;
  });

  it("should be true if user and pw match", () => {
    expect(basicAuth(generateAuthString("admin", "12345"))).toBe(true);
  });

  it("should be false if user or pw do not match", () => {
    expect(basicAuth(generateAuthString("admin", "11111"))).toBe(false);
    expect(basicAuth(generateAuthString("user", "12345"))).toBe(false);
    expect(basicAuth(generateAuthString("user", "11111"))).toBe(false);
  });

  it("should be false if auth string is null", () => {
    expect(basicAuth(null)).toBe(false);
  });
});
