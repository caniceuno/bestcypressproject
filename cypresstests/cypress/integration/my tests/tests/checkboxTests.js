import { Checkbox } from "../pages/practice";
describe("Checkbox Example", () => {
  it("finds the Checkbox Example", () => {
    cy.visit("https://courses.letskodeit.com/practice");
    cy.get('[id="checkbox-example-div"]');
  });
  it.only("Checks and all boxes", () => {
    cy.visit("https://courses.letskodeit.com/practice");
    cy.get('[type="checkbox"]').check("benz", "bmw", "honda");
    //why does this only check the first value
  });
  it.only("Checks and unchecks bmw", () => {
    const checkbox = new Checkbox();

    checkbox.navigate();
    checkbox.checkallElements();
    checkbox.allElementsAreChecked();
    checkbox.unCheckallElements();
    checkbox.allElementsNotChecked();
  });
});
