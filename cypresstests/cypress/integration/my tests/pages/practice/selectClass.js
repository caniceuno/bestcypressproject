class SelectClass {
  navigate() {
    cy.visit("https://courses.letskodeit.com/practice");
  }
  selectOption(brand) {
    cy.get('[id="carselect"]').select(brand);
    return this;
  }
  getSelectElement() {
    return cy.get('[id="carselect"]');
  }

  getBmwRadioButton() {
    return cy.get("[id= bmwradio]");
  }

  getBenzRadioButton() {
    return cy.get("[id= benzradio]");
  }

  getHonaRadioButton() {
    return cy.get("[id= hondaradio]");
  }

  checkElementSelected(x, y, z) {
    //how to name this correctly
    return cy
      .get('[id="carselect"]')
      .should("have.value", x)
      .should("not.have.value", y)
      .should("not.have.value", z);
  }
}

export default SelectClass;
