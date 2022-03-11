import SwitchTabPage from "../pages/switchTabPage";

describe("Switch Window Example", () => {
  it("Click Switch Window Example", () => {
    const switchTab = new SwitchTabPage();
    switchTab.navigate();
    switchTab.clickSwitchTab();
    cy.url().should("include", "https://courses.letskodeit.com/courses");
  });
});
