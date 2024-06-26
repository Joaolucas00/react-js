describe('testando a API', () => {
    
    context('GET /users', () => {
        it('Deve retornar uma lista de usuários', () => {
            cy.request('GET', 'http://localhost:8000/users').then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).length.to.be.greaterThan(1)
            })
        })
    })

    context('GET /users/:userId', () => {
        
        it('Deve retornar um único usuário', () => {
            cy.request({method: 'GET', url: 'http://localhost:8000/users/479259b4-7a67-4466-9926-324340f0f2c9'}).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('nome')
            })

        })

        it('Deve retornar um erro quando o usuário for inválido', () => {
            cy.request({method: 'GET', url: 'http://localhost:8000/users/4799b4-7a6-9926', failOnStatusCode: false}).then((response) => {
                expect(response.status).to.eq(404)
                expect(response.body).to.eq('Not Found')
            })
        })
    })

    context('Interceptando solicitações de rede', () => {
        
        it('Deve fazer a interceptação do POST users/login', () => {
            cy.intercept('POST', 'users/login').as('loginRequest')
            cy.fazerLogin()
            cy.wait('@loginRequest').then((interception) => {
                interception.response = {
                    statusCode: 200,
                    body: {
                        sucess: true,
                        message: 'Login bem sucedido!'
                    }
                }
            })
            cy.visit('/home')
            cy.getByData('titulo-boas-vindas').should('contain.text', 'Bem vindo de volta!')
        })
    })

    context('Testando método PUT da API Usuários', () => {

        it('Atualiza informações do usuário com sucesso', () => {
            const usuario = {
                nome: 'João Lucas Dorneles',
                senha: '1234567'
            }

            cy.request({
                method: 'PUT',
                url: 'http://localhost:8000/users/479259b4-7a67-4466-9926-324340f0f2c9',
                body: usuario,
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.nome).to.eq(usuario.nome)
                expect(response.body.senha).to.eq(usuario.senha)
            })
        })

        it('Retorna erro 404 para usuário inexistente', () => {
            const usuario = {
                nome: 'Nome Inválido',
                senha: '12324'
            }

            cy.request({
                method: 'PUT',
                url: 'http://localhost:8000/users/usuario_inexistente',
                body: usuario,
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(404)
                expect(response.body).to.eq('Not Found')
            })
        })

    })

    context('Realizando login via API', () => {
        it('Deve permitir o login do usuário João', () => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:8000/users/login',
                body: Cypress.env()
            }).then((res) => {
                expect(res.status).to.eq(200)
                expect(res.body).is.not.empty
                expect(res.body.user).to.have.property('nome')
                expect(res.body.user.nome).to.be.equal('João Lucas Dorneles')
            })
        })
    })

})