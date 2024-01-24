/// <reference types="cypress" />

it('Google Search', function(){

    cy.visit('https://google.com')

    cy.get('#APjFqb', {timeout:5000}).type('Automation Step by Step{Enter}')

    //cy.contains('Google Search').click()
    cy.wait(2000)
    cy.contains('Videos').click()
})