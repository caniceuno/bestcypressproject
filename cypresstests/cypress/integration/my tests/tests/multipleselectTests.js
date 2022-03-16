import { MultipleSelect } from "../pages/practice";

describe("Multiple Select Example", () => {
  it("finds the Multiple Select Example", () => {
    cy.visit("https://courses.letskodeit.com/practice");
    cy.get('[id= "multiple-select-example"]');
  });
  it("Selects Apple option", () => {
    const multipleselectpage = new MultipleSelect();
    {
      multipleselectpage.navigate();
      multipleselectpage.selectOption("apple");
      multipleselectpage.checkElementSelected("apple", "orange", "peach");
    }
  });
});
