import RadioButtonPage from "../pages/radioButtonPage";
const { hasUncaughtExceptionCaptureCallback } = require("process");
require("cypress-xpath");
describe("Radio Button Example", () => {
  it("finds the Radio Element", () => {
    cy.visit("https://courses.letskodeit.com/practice");
    cy.xpath('//*[@id="radio-btn-example"]/fieldset/legend');
  });
  it("Selects BMW option", () => {
    const radiobutton = new RadioButtonPage();
    {
      radiobutton.navigate();
      radiobutton.checkButton("bmw");
      radiobutton.getBmwRadioButton().should("be.checked");
      radiobutton.getBenzRadioButton().should("not.be.checked");
      radiobutton.getHonaRadioButton().should("not.be.checked");
    }
    // would like to know if i can add in tests to asset that other two values are not checked
  });
  it("Selects Benz option", () => {
    const radiobutton = new RadioButtonPage();
    {
      radiobutton.navigate();
      radiobutton.checkButton("benz");
      radiobutton.getBmwRadioButton().should("not.be.checked");
      radiobutton.getBenzRadioButton().should("be.checked");
      radiobutton.getHonaRadioButton().should("not.be.checked");
    }
  });
  it("Selects Honda option", () => {
    const radiobutton = new RadioButtonPage();
    {
      radiobutton.navigate();
      radiobutton.checkButton("honda");
      radiobutton.getBmwRadioButton().should("not.be.checked");
      radiobutton.getBenzRadioButton().should("not.be.checked");
      radiobutton.getHonaRadioButton().should("be.checked");
      //can i create a function for this to reduce typing out reptitive code
    }
  });
});
