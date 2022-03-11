import SwitchWindowPage from "../pages/switchWindowPage";

describe("Switch Window Example", () => {
  it("Click Switch Window Example", () => {
    const switchWindow = new SwitchWindowPage();
    switchWindow.navigate();
    switchWindow.clickSwitchWindow();
    cy.url().should("include", "https://courses.letskodeit.com/courses");
    //come back to this
  });
});
