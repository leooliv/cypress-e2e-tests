/// <reference types="cypress" />

describe('E2E Tests', () => {

    beforeEach(() => {
        cy.visit('https://wj-qa-automation-test.github.io/qa-test/')
    })

    it("Click the buttons one, two, four", () => {

        cy.get('#btn_one').click()
        cy.wait(1000)
        cy.get('#btn_two').click()
        cy.wait(1000)
        cy.get('#btn_link').click()
    })
})