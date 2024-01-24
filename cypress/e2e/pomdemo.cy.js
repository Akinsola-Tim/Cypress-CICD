import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage


beforeEach(function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

describe('All Login Tests', function(){

    it('Login valid credentials', function () {
    
        
    
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    })
    
    
    it('Login with invalid username', function () {
    
        loginPage.enterUsername('Admin123')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    })

  
})

it('Login with invalid password', function () {
    
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin12345')
    loginPage.clickLogin()
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
})


