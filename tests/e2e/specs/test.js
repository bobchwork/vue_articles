// https://docs.cypress.io/api/introduction/api.html

describe('Testing the main page', () => {
  it('Visits the Main page', () => {
    cy.visit('/');
    cy.get('a').should('contain', 'Main Page');
  });
});
