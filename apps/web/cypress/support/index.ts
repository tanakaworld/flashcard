/// <reference types="cypress" />

import "@testing-library/cypress/add-commands";

Cypress.Commands.add(
  "mockGraphql",
  (operationName: string, mockData: any, alias: string) => {
    cy.intercept(
      "http://localhost:4000",
      {
        method: "POST",
        headers: {
          "x-graphql-operation-name": operationName,
        },
      },
      {
        data: mockData,
      }
    ).as(alias);
  }
);

export {};
