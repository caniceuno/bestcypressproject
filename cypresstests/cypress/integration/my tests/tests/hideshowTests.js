import { HideShow } from "../pages/practice";

describe("Hide/show Example", () => {
  it("Clicks Hide button (smoke)", () => {
    const hideshow = new HideShow();
    hideshow.navigate();
    hideshow.clickHideButton();
    cy.get('[id = "displayed-text"]').should("not.be.visible");
  });
  it("Clicks Show button and enters text", () => {
    const hideshow = new HideShow();
    cy.visit("https://courses.letskodeit.com/practice");
    hideshow.clickShowButton();
    hideshow.enterText("Canice");
    cy.get('[id = "displayed-text"]')
      .should("be.visible")
      .should("have.value", "Canice");
  });
});
