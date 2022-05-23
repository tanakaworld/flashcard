/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    mockGraphql(
      operationName: string,
      mockData: any,
      alias: string
    ): Chainable<null>;
  }
}
