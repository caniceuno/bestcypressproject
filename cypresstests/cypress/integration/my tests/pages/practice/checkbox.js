class Checkbox {
  navigate() {
    cy.visit("https://courses.letskodeit.com/practice");
  }
  checkOption(brand) {
    cy.get('[type="checkbox"]').check(brand);
    return this;
  }

  uncheckOption(brand) {
    cy.get('[type="checkbox"]').uncheck(brand);
    return this;
  }

  checkElementSelected(brand) {
    //how to name this correctly
    return cy.get('[type="checkbox"]').should("be.checked", brand);
  }

  checkNoElementSelected(brand) {
    //how to name this correctly
    return cy.get('[type="checkbox"]').should("not.be.checked", brand);
  }

  allElementsNotChecked() {
    const brands = ["bmw", "benz", "honda"];
    for (let i = 0; i < brands.length; i++) {
      cy.get('[type="checkbox"]').eq(i).should("not.be.checked");
    }
    return;
  }
  allElementsAreChecked() {
    const brands = ["bmw", "benz", "honda"];
    for (let i = 0; i < brands.length; i++) {
      cy.get('[type="checkbox"]').eq(i).should("be.checked");
    }
    return;
  }
  checkallElements() {
    const brands = ["bmw", "benz", "honda"];
    for (let i = 0; i < brands.length; i++) {
      cy.get('[type="checkbox"]').check(brands[i]);
    }
    return;
  }
  unCheckallElements() {
    const brands = ["bmw", "benz", "honda"];
    for (let i = 0; i < brands.length; i++) {
      cy.get('[type="checkbox"]').uncheck(brands[i]);
    }
    return;
  }
}

export default Checkbox;
