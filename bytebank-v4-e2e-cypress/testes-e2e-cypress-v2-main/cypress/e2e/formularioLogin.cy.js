describe('Formulario de Login', ()=>{
  beforeEach(()=>{
    cy.visit('http://localhost:3000')
  })

  it('Deve acessar a página home', () => {
    cy.fazerLogin()
    cy.getByData('titulo-boas-vindas').should('contain', 'Bem vindo de volta!')
  })

  it('Não deve permitir um email inválido', ()=>{
    cy.logar('emailerrado@errado', 'senhaqualquer')
    cy.getByData('mensagem-erro').should('exist').and('have.text', 'O email digitado é inválido')
  })

  it('Não deve permitir um campo em branco', ()=>{
    cy.getByData('botao-login').click()
    cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()
    cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo email é obrigatório')
  })
})