import { WebTable } from "../pages/practice";

describe("Web Table Example", () => {
  it("Confirms size of price table", () => {
    const webtable = new WebTable();
    webtable.navigate();
    webtable.getTd.its("length").should("eq", 9);
    webtable.getTr.its("length").should("eq", 4);
    //how would i assert this on this page?
    // cy.visit("https://courses.letskodeit.com/practice");
    // cy.get("td").its("length").should("eq", 9);
    // cy.get("tr").its("length").should("eq", 4);
  });
});
