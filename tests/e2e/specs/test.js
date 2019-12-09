// https://docs.cypress.io/api/introduction/api.html

describe('Testing the main page', () => {
  it('Visits the Main page', () => {
    cy.visit('http://localhost:8080/');
    cy.get('[data-cy="home-link"]').contains( 'Main Page');
  });
});
