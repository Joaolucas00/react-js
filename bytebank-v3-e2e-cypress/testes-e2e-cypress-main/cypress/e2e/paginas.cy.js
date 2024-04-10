describe('Testando múltiplas páginas', () => {
    it('Deve conseguir acessar a página de cartões', () => {
        cy.visit('/')
        cy.fazerLogin()
        cy.getByData('app-home').find('a').eq(1).click()
        cy.getByData('titulo-cartoes').should('exist').and('have.text', 'Meus cartões')
    })
})