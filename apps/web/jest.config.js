const base = require("jest-internal/jest.config");

module.exports = {
  ...base,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: [
    "jest-internal/setupFiles/jsdom.ts",
    "jest-internal/setupFiles/jest-fetch-mock.ts",
  ],
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/src/$1",
  },
};
