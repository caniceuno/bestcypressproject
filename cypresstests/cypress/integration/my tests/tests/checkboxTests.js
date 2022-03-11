import { CheckboxPage, AlertPage } from "../pages";
describe("Checkbox Example", () => {
  it("finds the Checkbox Example", () => {
    cy.visit("https://courses.letskodeit.com/practice");
    cy.get('[id="checkbox-example-div"]');
  });
  it("Checks and all boxes", () => {
    cy.visit("https://courses.letskodeit.com/practice");
    cy.get('[type="checkbox"]').check("benz", "bmw", "honda");
    //why does this only check the first value
  });
  it.only("Checks and unchecks bmw", () => {
    const checkbox = new CheckboxPage();
    {
      checkbox.navigate();
      checkbox.checkallElements();
      checkbox.allElementsAreChecked();
      checkbox.unCheckallElements();
      checkbox.allElementsNotChecked();
    }
  });
});
