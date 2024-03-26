describe('Magento', () => {
  beforeEach(()=>{
    cy.visit('https://magento.softwaretestingboard.com/')
  })

  it('VerifyVisitWeb',()=>{
   cy.get('.logo').should('be.visible')
  })

  it('ClickLogin',()=>{
    cy.ClickLogin()
  })

  it('VerifyLoginPage',()=>{
    cy.ClickLogin()
    cy.get('h1>span').should('have.text','Customer Login')
    //cy.contains('Customer Login').should('be.visible')
    //cy.get('.page-title').contains('Customer Login')
  })

  it('InputEmail',()=>{
    cy.ClickLogin()
    //cy.get('#email').type('phakjira_m@seasiacenter.com')
    //cy.get('[type="email"]').type('phakjira_m@seasiacenter.com')
    //cy.get('[title="Email"]').type('phakjira_m@seasiacenter.com')
    cy.get('input[id="email"]').type('phakjira_m@seasiacenter.com') //ใส่ type/title/id ก็ได้
  })

  it('InputPassword',()=>{
    cy.ClickLogin()
    cy.get('input[type="password"][name="login[password]"]').type('Pang@280842')
   //cy.get('#pass').type('Pang@280842')
   //cy.get("[title='Password']").type('Pang@280842')

  })

  it('E2ESignIn',()=>{
    cy.ClickLogin()
    cy.get('input[id="email"]').type('phakjira_m@seasiacenter.com')
    cy.get('input[type="password"][name="login[password]"]').type('Pang@280842')
    cy.get('button>span').contains('Sign In').click()
  })

})