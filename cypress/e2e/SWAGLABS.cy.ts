describe('SwagLabs',()=>{
    
    // it('VisitWeb',()=>{
    //     cy.visit('https://www.saucedemo.com')
    //     cy.wait(200000)
    //     cy.get('div[class="login_logo"]').should('have.text','Swag Labs')
    // }) 
    it('Login',()=>{
        cy.visit('https://www.saucedemo.com')
        cy.log("pass")
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('input[data-test="login-button"]').click()
    })
})