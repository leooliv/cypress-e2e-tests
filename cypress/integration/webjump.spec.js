/// <reference types="cypress" />

describe('E2E Tests', () => {

    beforeEach(() => {

        // Comando beforeEach para garantir o refresh da página a cada caso de teste presente na suite

        cy.visit('https://wj-qa-automation-test.github.io/qa-test/')
    });

    it("Click the buttons one, two, four", () => {

        // Comando get irá pegar o elemento presente na página, a partir desse momento podemos realizar ações com ele
        // should('not.exist') ja irá vefiricar se o elemento está presente na pagina ou não

        cy.get('#btn_one').click().should('not.be.visible')
        // Usando wait para garantir que o teste não quebre a página, visto que o framework trabalha rapidamente
        
        cy.wait(1000)
        cy.get('#btn_two').click().should('not.be.visible')
        cy.wait(1000)
        cy.get('#btn_link').click().should('not.be.visible')
        


    });

    
})