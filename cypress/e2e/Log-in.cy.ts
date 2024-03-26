function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function generatePhoneNumber() {
    const startString = "08";
    let phoneNumber = "";
  
    for (let i = 0; i < 8; i++) {
      phoneNumber += getRandomNumber(0, 9);
    }
  
    const result = startString + phoneNumber;
    return result;
  }
  
  const numEmails = 41;
  const TEST_DATA = [];
  const PASSWORD = "P@ssw0rd";
  
  for (let i = 40; i < numEmails; i++) {
   
    const username = i;
    const email = `${username}@yopmail.com`;
    TEST_DATA.push({
      email: email,
      password: PASSWORD,
      phoneNumber: generatePhoneNumber(),
    });
  }
  
  describe("email", () => {
    TEST_DATA.forEach((data) => {
      it("Email", () => {
        cy.visit("https://staging-central.seasiacenter.com/login");
        cy.get('span>a[href="/sign-up"]').should("have.text", "Register").click();
        cy.wait(2000);
        cy.get('fieldset>input[type="email"]').type(data?.email);
        cy.get('fieldset>input[type="password"][name="password"]').type(
          "P@ssw0rd"
        );
        cy.get('fieldset>input[name="confirmPassword"]').type(data?.password);
        cy.get('fieldset>input[name="firstName"]').type("Test");
        cy.get('fieldset>input[name="lastName"]').type("2");
        cy.get('fieldset>input[name="phoneNumber"]').type(data?.phoneNumber);
        cy.get('button[type="submit"]').should("have.text", "Next").click();
        cy.get("p").contains("Governing law and Jurisdiction").scrollIntoView();
        cy.get("div").contains("I agree to terms and conditions.").click();
        cy.get("button").contains("Continue").click({ force: true });
        cy.get('[id^="headlessui-description"]').each(($el) => {
          if ($el.text() === "Accept") {
            cy.wrap($el).click();
          }
        });
        cy.get('button[type="submit"]').contains("Save").click();
        cy.get("div>p").contains("Successfully become a SEAC member!");
        //cy.get('button[type="submit"]').contains("Continue").click();
      });
    });
})