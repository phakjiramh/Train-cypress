describe("test",()=>{
    it('ferin',()=>{
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.url().should("include",'index') //check path ของ url
        cy.get("#iconsomething").should("exist") //should('be.visible') => exist: verify ว่ามีอยู่จริง แม้ว่าระบบยังโหลดไม่เสร็จ, be.visible: verify ว่ามีอย฿่จริงแต่ระบบโหลดมาแสดงใน ui แล้ว
        

    })


})