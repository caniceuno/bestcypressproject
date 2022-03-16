class RadioButton {
  navigate() {
    cy.visit("https://courses.letskodeit.com/practice");
  }
  checkButton(brand) {
    cy.get('[type="radio"]').check(brand);
    return this;
  }
  getCheckButton() {
    return cy.get('[type="radio"]');
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
}

export default RadioButton;
