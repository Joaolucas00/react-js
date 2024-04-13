import { faker, ja } from "@faker-js/faker"

describe('Atualização de dados do usuário', () => {
    const novosDadosUsuarios = {
        nome: faker.person.fullName(),
        senha: faker.internet.password()
    }

    it('Deve permitir o usuário atualizar seus dados', () => {
        cy.fixture('usuarios.json').as('usuarios')
        cy.get('@usuarios').then((usuario) => {
            cy.logar(usuario[0].email, usuario[0].senha)
            cy.visit('/home')
            cy.url().should('include', '/home')
            cy.contains(usuario[0].nome).should('be.visible')
            cy.getByData('app-home').find('a').eq(1).click()
            cy.url().should('include', '/minha-conta')
            cy.getByData('botao-salvar-alteracoes').should('be.disabled')
            cy.get('[name="nome"]').type(novosDadosUsuarios.nome)
            cy.get('[name="senha"]').type(novosDadosUsuarios.senha)
            cy.getByData('botao-salvar-alteracoes').should('not.be.disabled')
            cy.getByData('botao-salvar-alteracoes').click()
            cy.on('window:alert', (textoAlert) => { 
                expect(textoAlert).to.equal('Alterações salvas com sucesso!')
            })
            cy.url().should('include', '/home')

            cy.window().then((janela) => {
                expect(janela.localStorage.getItem('nomeUsuario')).to.equal(novosDadosUsuarios.nome)
                const userId = janela.localStorage.getItem('userId');
                cy.request('GET', `http://localhost:8000/users/${userId}`).then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.nome).to.be.equal(novosDadosUsuarios.nome)
                    expect(response.body.senha).to.be.equal(novosDadosUsuarios.senha)
                })
            })
            
        })
    })
})