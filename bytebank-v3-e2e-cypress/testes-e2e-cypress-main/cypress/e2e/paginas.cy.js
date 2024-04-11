describe('Testando múltiplas páginas', () => {
    it('Deve conseguir acessar a página de cartões', {browser: 'edge'}, () => {
        cy.visit('/')
        cy.fazerLogin()
        cy.location('pathname').should('eq', '/home')
        cy.getByData('app-home').find('a').eq(1).click()
        cy.getByData('titulo-cartoes').should('exist').and('have.text', 'Meus cartões')
        cy.location('pathname').should('eq', '/home/cartoes')
    })
})