/// <reference types="cypress" />

describe('should test at a backend level', () => {

    it('Should do login with success', () => {
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/login',
            body: {
                    "email": "fulano@qa.com",
                    "password": "teste"
            }
        }).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal('Login realizado com sucesso')
        })
    })

    it('Should validate incorrect password', () => {
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/login',
            body: {
                    "email": "fulano@qa.com",
                    "password": "SenhaIncorreta"
            },
            failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.equal(401)
            expect(response.body.message).to.equal('Email e/ou senha inválidos')
        })
    })

    it('Should create a new user', () => {
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            body: {
                "nome": "Gustavo Mouts",
                "email": "gustavo5@mouts.com",
                "password": "teste",
                "administrador": "true",
            }
        }).then((response)=>{
            expect(response.status).to.equal(201)
            expect(response.body.message).to.equal('Cadastro realizado com sucesso')
        })
    } )
    
})