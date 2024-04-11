describe('Testando dispositivos móveis', () => {

    context('Resolução de 662p', () => {

        it('Deve existir um botão menu burger', {viewportWidth: 375, viewportHeight: 667}, () => {
            cy.visit('')
            cy.fazerLogin()
    
            cy.location('pathname').should('eq', '/home')
            cy.getByData('menu-burguer').click()
            cy.getByData('menu-lateral').find('a').eq(3).click()
            cy.location('pathname').should('eq', '/home/investimentos')
        })

    })

    context('Resolução do iphone xr', () => {

        beforeEach(() => {
            cy.visit('/')
            cy.viewport('iphone-xr')
        })

        it('Deve existir um botão', () => {
            cy.fazerLogin()
            cy.location('pathname').should('eq', '/home')
            cy.getByData('menu-burguer').should('be.visible')
        })

    })

    context('Resolução do mackbook 13', () => {

        beforeEach(() => {
            cy.visit('/')
            cy.viewport('macbook-13')
        })

        it('Não deve existir um botão menu burguer', () => {
            cy.fazerLogin()
            cy.location('pathname').should('eq', '/home')
            cy.getByData('menu-burguer').should('not.be.visible')
        })
    })
})