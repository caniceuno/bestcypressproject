class SwitchWindow {
  navigate() {
    cy.visit("https://courses.letskodeit.com/practice");
  }
  clickSwitchWindow() {
    cy.get('[id="openwindow"]').invoke("removeAttr", "target").click();
    return this;
  }
}

export default SwitchWindow;
