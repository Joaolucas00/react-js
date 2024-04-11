describe('Jornada de usuário', () => {
    
    it('Deve permitir que o usuário acesse a aplicação, realize uma transação e faça um logout', () => {
        cy.visit('/')
        cy.fazerLogin()
        
        cy.location('pathname').should('eq', '/home')
        
        cy.getByData('select-opcoes').select('Transferência')
        cy.getByData('form-input').type('80')
        cy.getByData('realiza-transacao').click()

        cy.getByData('lista-transacoes').find('li').last().contains('- R$ 80')
        cy.getByData('botao-sair').click()
        cy.location('pathname').should('eq', '/')
    })

})