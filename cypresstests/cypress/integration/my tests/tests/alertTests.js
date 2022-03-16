import { Alert } from "../pages/practice";
describe("Alert Example", () => {
  it("Click AlertExample", () => {
    const alertpage = new Alert();
    alertpage.navigate();
    alertpage.clickAlertButton;
    cy.on("window:alert", (txt) => {
      expect(txt).to.contains(
        "Hello , share this practice page and share your knowledge"
      );
      //should this be on the page object page and if so how would I assert
    });
  });
  it("Enters text into text box and confirms message", () => {
    const alertpage = new Alert();
    alertpage.navigate();
    alertpage.enterName("canice test");
    alertpage.clickConfirm();
    cy.on("window:confirm", (txt) => {
      //Mocha assertions
      expect(txt).to.contains("canice test");
      //is there a way to interact with the confirm box
    });
  });
});
