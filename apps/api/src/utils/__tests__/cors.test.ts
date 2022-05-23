import { getAllowOrigins } from "~/utils/cors";

describe("getAllowOrigins", () => {
  it("should set the url for Apollo Studio as defeault", () => {
    const origins = getAllowOrigins();
    expect(origins.includes("https://studio.apollographql.com")).toBeTruthy();
  });
});
