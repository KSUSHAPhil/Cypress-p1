describe('login page', () => {
  beforeEach (() => {
    cy.visit('/');
  })
  it('login succesfully', () => {
    cy.login('test@test.com', 'test');
    cy.contains('Добро пожаловать test@test.com').should('be.visible');
  })

  it('login empty', () => {
    cy.login(null, 'test');
    cy.get('#mail').then((el) => {
      expect (el[0].checkValidity()).to.be.false;
      expect (el[0].validationMessage).to.be.eql('Заполните это поле.');
    })
  })
  
  it('pass empty', () => {
    cy.login('test@test.com', null);
    cy.get('#pass').then((el) => {
      expect (el[0].checkValidity()).to.be.false;
      expect (el[0].validationMessage).to.be.eql('Заполните это поле.')

    })
  })

  
})