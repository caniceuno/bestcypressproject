import { SwitchTab } from "../pages/practice";

describe("Switch Window Example", () => {
  it("Click Switch Window Example", () => {
    const switchTab = new SwitchTab();
    switchTab.navigate();
    switchTab.clickSwitchTab();
    cy.url().should("include", "https://courses.letskodeit.com/courses");
  });
});
