class WebTable {
  navigate() {
    cy.visit("https://courses.letskodeit.com/practice");
  }
  getTd() {
    cy.get("td");
    return this;
  }

  getTr() {
    cy.get("tr");
    return this;
  }
}

export default WebTable;
