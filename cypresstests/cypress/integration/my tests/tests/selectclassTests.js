import SelectClassPage from "../pages/selectClassPage";

describe("Select Class Example", () => {
  it("finds the Select Class Example", () => {
    cy.visit("https://courses.letskodeit.com/practice");
    cy.get('[id= "select-class-example"]');
  });
  it("Selects BMW option", () => {
    const classpage = new SelectClassPage();
    {
      classpage.navigate();
      classpage.selectOption("bmw");
      classpage.checkElementSelected("bmw", "honda", "benz");
    }
  });
  it("Selects Benz option", () => {
    const classpage = new SelectClassPage();
    {
      classpage.navigate();
      classpage.selectOption("benz");
      classpage.checkElementSelected("benz", "honda", "bmw");
    }
  });
  it("Selects Honda option", () => {
    const classpage = new SelectClassPage();
    {
      classpage.navigate();
      classpage.selectOption("honda");
      classpage.checkElementSelected("honda", "bmw", "benz");
    }
  });
});
