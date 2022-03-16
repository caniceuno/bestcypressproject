class AlertPage {
  navigate() {
    cy.visit("https://courses.letskodeit.com/practice");
  }
  //should i have get for every element on the page or is it ok to do the get inside of the functions
  clickAlertButton() {
    cy.get('[id="alertbtn"]').click();
  }

  onAlert() {
    cy.on("window:alert", (txt) => {
      //Mocha assertions
      expect(txt).to.contains(
        "Hello , share this practice page and share your knowledge"
      );
    });
  }

  enterName(myText) {
    cy.get('[name="enter-name"]').type(myText);
  }

  clickConfirm() {
    cy.get('[id = "confirmbtn"').click();
  }
}

export default AlertPage;
