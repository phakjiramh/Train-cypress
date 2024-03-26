declare namespace Cypress {
    interface Chainable {
       SignIn(): Chainable<null>
    }
  }


  Cypress.Commands.add('SignIn',()=>{
    const Email = 'phakjira_m@seasiacenter.com.th'
    const Password = 'Pang@280842'
    cy.get('div>input[name="email"]').type(Email)
    cy.get('div>button[type="submit"]').should('have.text','Continue').click()
    cy.get('div>input[type="password"]').type(Password)
    cy.get('div>button[type="submit"]').should('have.text','Sign in').click()
  })