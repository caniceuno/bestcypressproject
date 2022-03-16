import { Hover } from "../pages/practice";

describe("Mouse Hover Example", () => {
  it("Clicks Hide button", () => {
    const hoverpage = new Hover();
    hoverpage.navigate();
    hoverpage.clickScrollButton();
    cy.window().its("scrollY").should("equal", 122.4000015258789);
  });
  it("Clicks Reload button", () => {
    const hoverpage = new Hover();
    hoverpage.navigate();
    hoverpage.clickReloadButton();
    // not sure how to assert this
    cy.window().should("have value", "page Loaded");
  });
});
