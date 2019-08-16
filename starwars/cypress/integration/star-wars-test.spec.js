 
 //test to determine if the following three characters can be found on the page
 describe("Star Wars Test", function() {
    it('Visits Star Wars React App', function() {
      cy.visit("http://localhost:3000")

      cy.contains("Luke Skywalker")     
      cy.contains("Darth Vader")
      cy.contains("Leia Organa")
      
    })
  })