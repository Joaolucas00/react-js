describe('Formulario de Login', ()=>{

  it.only('Deve acessar a página home', () => {
    cy.logar('aaa@aaa.com', '12345')
    cy.visit('/home')
    cy.getByData('titulo-boas-vindas').should('contain', 'Bem vindo de volta!')
  });

  it('Não deve permitir um email inválido', ()=>{
    cy.logar('emailerrado@errado', 'senhaqualquer')
    cy.getByData('mensagem-erro').should('exist').and('have.text', 'O email digitado é inválido')
  });

  it('Não deve permitir um campo em branco', ()=>{
    cy.getByData('botao-login').click()
    cy.getByData('senha-input').type('123456')
    cy.getByData('botao-enviar').click()
    cy.getByData('mensagem-erro').should('exist').and('have.text', 'O campo email é obrigatório')
  });
});