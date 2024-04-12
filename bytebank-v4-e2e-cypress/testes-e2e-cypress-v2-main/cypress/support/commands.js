Cypress.Commands.add('getByData', (seletor) => {
  return cy.get(`[data-test=${seletor}]`)
})

Cypress.Commands.add('fazerLogin', () => {
  cy.getByData('botao-login').click()
  cy.getByData('email-input').type('Jaolucas@emailqualquer.com')
  cy.getByData('senha-input').type('Jãolucas1234')
  cy.getByData('botao-enviar').click()
})

Cypress.Commands.add('logar', (email, senha) => {
  cy.session([email, senha], () => {
      cy.visit('/')
      cy.getByData('botao-login').click()
      cy.getByData('email-input').type(email)
      cy.getByData('senha-input').type(senha)
      cy.getByData('botao-enviar').click()
      cy.url().should('contain', '/home')
  })
})
