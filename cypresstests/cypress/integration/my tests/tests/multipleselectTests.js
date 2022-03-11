import MultipleSelectPage from "../pages/multipleSelectPage";

describe("Multiple Select Example", () => {
  it("finds the Multiple Select Example", () => {
    cy.visit("https://courses.letskodeit.com/practice");
    cy.get('[id= "multiple-select-example"]');
  });
  it("Selects Honda option", () => {
    const multipleselectpage = new MultipleSelectPage();
    {
      multipleselectpage.navigate();
      multipleselectpage.selectOption("apple");
      multipleselectpage.checkElementSelected("apple", "orange", "peach");
    }
  });
});
