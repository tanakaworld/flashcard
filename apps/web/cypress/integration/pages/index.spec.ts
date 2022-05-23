import { mockCard } from "../../../test/fixtures/card";

const cards = [
  mockCard({ id: 1 }),
  mockCard({ id: 2 }),
  mockCard({ id: 3 }),
  mockCard({ id: 4 }),
];
const prevButton = () => cy.findByText("👈");
const nextButton = () => cy.findByText("👉");
const flipButton = (isNowFront: boolean = true) =>
  cy.findByText(isNowFront ? "🙈" : "🐵");

describe("index", () => {
  describe("Cards registered", () => {
    beforeEach(() => {
      cy.mockGraphql("Cards", { cards }, "gqlCards");
      cy.visit("/");
      cy.wait("@gqlCards");
    });

    it("should display the first card", () => {
      cy.findByText(cards[0].front);
    });

    it("should transition cards correctly", () => {
      prevButton().should("be.disabled");

      // card #1
      cy.findByText(cards[0].front);
      flipButton().click();
      cy.findByText(cards[0].back);
      nextButton().click();

      // card #2
      cy.findByText(cards[1].front);
      flipButton().click();
      cy.findByText(cards[1].back);
      nextButton().click();

      // card #3
      cy.findByText(cards[2].front);
      flipButton().click();
      cy.findByText(cards[2].back);
      nextButton().click();

      // card #4
      cy.findByText(cards[3].front);
      flipButton().click();
      cy.findByText(cards[3].back);

      nextButton().should("be.disabled");
    });
  });

  describe("No cards", () => {
    beforeEach(() => {
      cy.mockGraphql("Cards", { cards: [] }, "gqlCards");
      cy.visit("/");
      cy.wait("@gqlCards");
    });

    it("should display the first card", () => {
      cy.findByText("No cards 🤷");
      prevButton().should("not.exist");
      nextButton().should("not.exist");
      flipButton().should("not.exist");
    });
  });
});
