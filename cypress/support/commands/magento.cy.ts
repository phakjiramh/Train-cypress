declare namespace Cypress {
    interface Chainable {
        ClickLogin(): Chainable<null>
    }
  }

 
  
  Cypress.Commands.add('ClickLogin',()=>{
     // cy.contains('Sign In').click() ท่าง่าย
   cy.get('a').contains('Sign In').click() //ท่าละเอียดมาหน่อยใช้ tag
   // cy.get('.authorization-link').contains('Sign In').click() ท่าใช้ class
  })