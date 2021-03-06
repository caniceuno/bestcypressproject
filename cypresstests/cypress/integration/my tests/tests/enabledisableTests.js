import { EnableDisable } from "../pages/practice";

describe("Enable/disable Example", () => {
  it("Clicks disable button", () => {
    const enabledisable = new EnableDisable();
    enabledisable.navigate();
    enabledisable.clickDisableButton();
    cy.get('[id = "enabled-example-input"]').should("be.disabled");
  });
  it("Clicks enabled button and enters text", () => {
    const enabledisable = new EnableDisable();
    enabledisable.navigate();
    enabledisable.clickEnableButton();
    enabledisable.enterText("Canice");
    cy.get('[id = "enabled-example-input"]')
      .should("not.be.disabled")
      .should("have.value", "Canice");
  });
});
