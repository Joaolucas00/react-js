describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h2').contains('Vantagens do nosso banco:')
  })
})