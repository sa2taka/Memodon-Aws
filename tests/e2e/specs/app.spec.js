describe('App', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Memodon');
  });
});
