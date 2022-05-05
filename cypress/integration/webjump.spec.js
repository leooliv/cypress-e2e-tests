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

    it('Click the buttons in IFRAME', () => {

        cy.get('#iframe_panel_body > iframe')
          .scrollIntoView().its('0.contentDocument.body')
          .find('#btn_one').click().should('not.be.visible')

        cy.wait(1000)

        cy.get('#iframe_panel_body > iframe')
          .its('0.contentDocument.body')
          .find('#btn_two').click().should('not.be.visible')
          
        cy.wait(1000)

        cy.get('#iframe_panel_body > iframe')
          .its('0.contentDocument.body')
          .find('#btn_link').click().should('not.be.visible')
        
        
    })

      it('Preencher, clicar, checar, selecionar e validar presença', () => {

        cy.get('#panel_test_two').find('#first_name')
          .type('Nome Teste').should('have.value', 'Nome Teste')

        cy.get('#btn_one').click().should('not.be.visible')

        cy.get('#opt_three').check()

        cy.get('#select_box').select('ExampleTwo')
          .should('have.value', 'option_two')

        cy.get('[alt="selenium"]').should('be.visible')

      })

    
})