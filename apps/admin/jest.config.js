const base = require("jest-internal/jest.config");

module.exports = {
  ...base,
  moduleNameMapper: {
    "~/(.*)": "<rootDir>/src/$1",
  },
};
