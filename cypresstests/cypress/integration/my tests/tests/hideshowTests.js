import HideShowPage from "../pages/hideShowPage";

describe("Hide/show Example", () => {
  it("Clicks Hide button", () => {
    const hideshow = new HideShowPage();
    hideshow.navigate();
    hideshow.clickHideButton();
    cy.get('[id = "displayed-text"]').should("not.be.visible");
  });
  it("Clicks Show button and enters text", () => {
    const hideshow = new HideShowPage();
    cy.visit("https://courses.letskodeit.com/practice");
    hideshow.clickShowButton();
    hideshow.enterText("Canice");
    cy.get('[id = "displayed-text"]')
      .should("be.visible")
      .should("have.value", "Canice");
  });
});
