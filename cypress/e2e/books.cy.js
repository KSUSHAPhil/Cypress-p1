const book = {
    title: 'title',
    description :'descr',
    author: 'author',
};

describe ('book page', () => {
    beforeEach (() => {
        cy.viewport(Cypress.env("viewportWidth"), Cypress.env("viewportHeight"));
        cy.visit('/');
        cy.login('test@test.com', 'test');
    });

    it('add book', () => {
        cy.addBook(book);
        cy.visit('/favorites');
        cy.get('.card-title').should("contain.text", book.title);
        
    })

    it('delete book', () => {
        cy.visit('/favorites');
        cy.contains(book.title)
        .should("be.visible")
        .within(() => cy.get(".card-footer > .btn").click({ force: true }));
      cy.contains(book.title).should("not.exist");
    })

    it('delete all books', () => {
        cy.addBook(book);
        cy.addBook(book);
        cy.removeAll();
        cy.contains('Please add some book to favorit on home page!').should(
            'exist'
        );
    });
});