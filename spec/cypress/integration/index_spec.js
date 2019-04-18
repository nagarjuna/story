describe('The Home Page', function() {
  it('successfully loads', function() {
    cy.visit('http://localhost:5002/articles') // change URL to match your dev URL
    cy.contains("Articles")
  })
})
