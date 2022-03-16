class SwitchTab {
  navigate() {
    cy.visit("https://courses.letskodeit.com/practice");
  }
  clickSwitchTab() {
    cy.get('[id="opentab"]').invoke("removeAttr", "target").click();
    return this;
  }
}

export default SwitchTab;
