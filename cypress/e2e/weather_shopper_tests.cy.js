describe("Weather Shopper Tests", () => {
  beforeEach(() => {
    cy.visit("http://weathershopper.pythonanywhere.com/")
  })

  it("Should buy moisturizer when the weather is below 19 degrees", () => {
    // Get the temperature from the web page
    cy.get("#temperature").then((element) => {
      const temperatureText = element.text()
      const temperature = parseInt(temperatureText.split("°")[0]) // Extract the numeric value of the temperature

      // Shop for moisturizers if the temperature is below 19 degrees
      if (temperature < 19) {
        cy.contains("Buy moisturizers").click()
        cy.get(".btn.btn-primary").first().click()
        cy.get("#cart").should("not.have.value", "Empty")
        cy.log("The product added to the cart successfully.")
      }
      // Otherwise, log a message indicating that no action is required
      else {
        cy.log(
          "The weather is not below 19 degrees. No need to shop for moisturizers."
        )
      }
    })
  })

  it("Should buy sunscreen when the weather is above 34 degrees", () => {
    // Get the temperature from the web page
    cy.get("#temperature").then((element) => {
      const temperatureText = element.text()
      const temperature = parseInt(temperatureText.split("°")[0]) // Extract the numeric value of the temperature

      // Shop for sunscreens if the temperature is above 34 degrees
      if (temperature > 34) {
        cy.contains("Buy sunscreens").click()
        cy.get(".btn.btn-primary").first().click()
        cy.get("#cart").should("not.have.value", "Empty")
        cy.log("The product added to the cart successfully.")
      }
      // Otherwise, log a message indicating that no action is required
      else {
        cy.log(
          "The weather is not above 34 degrees. No need to shop for sunscreens."
        )
      }
    })
  })
})
