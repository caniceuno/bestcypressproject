class EnableDisablePage {
  navigate() {
    cy.visit("https://courses.letskodeit.com/practice");
  }
  clickDisableButton() {
    cy.get('[id = "disabled-button"]').click();
  }
  clickEnableButton() {
    cy.get('[id = "enabled-button"]').click();
  }
  enterText(myText) {
    cy.get('[id = "enabled-example-input"]').type("Canice");
  }
}

export default EnableDisablePage;
