class MultipleSelectPage {
  navigate() {
    cy.visit("https://courses.letskodeit.com/practice");
  }
  selectOption(brand) {
    cy.get('[id="multiple-select-example"]').select(brand);
    return this;
  }

  checkElementSelected(x, y, z) {
    //how to name this correctly
    return cy
      .get('[id="multiple-select-example"]')
      .should("have.value", x)
      .should("not.have.value", y)
      .should("not.have.value", z);
  }
}

export default MultipleSelectPage;
