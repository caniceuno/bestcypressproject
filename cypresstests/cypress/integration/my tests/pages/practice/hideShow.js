class HideShow {
  navigate() {
    cy.visit("https://courses.letskodeit.com/practice");
  }
  clickShowButton() {
    cy.get('[id = "show-textbox"]').click();
  }
  clickHideButton() {
    cy.get('[id = "hide-textbox"]').click();
  }
  enterText(myText) {
    cy.get('[id = "displayed-text"]').type("Canice");
  }

  showButton() {
    cy.get('[id = "show-textbox"]');
    return this;
  }

  hidebutton() {
    cy.get('[id = "hide-textbox"]');
    return this;
  }
}

export default HideShow;
