class HoverPage {
  navigate() {
    cy.visit("https://courses.letskodeit.com/practice");
  }
  clickScrollButton() {
    cy.get('*[class^="mouse-hover-content"]').invoke("show");
    cy.get('[href="#top"]').click();
    return this;
  }

  clickReloadButton() {
    cy.get('*[class^="mouse-hover-content"]').invoke("show");
    cy.get("a").contains("Reload").click();
    return this;
  }
}

export default HoverPage;
