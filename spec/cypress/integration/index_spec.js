describe("Articles Test", function() {
  it("Navigating to Articles", function() {
    cy.visit("/articles")
      .get("h1")
      .should("have.text", "Articles"); // navigating to user index page
  });
  it('Create article', function() {
    cy.visit('/articles/new') 
    cy.get('input[name="article[title]"]').type("Testing from cypress");
    cy.contains('Create Article').click()
  })
});

