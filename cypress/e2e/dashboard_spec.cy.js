describe('Dashboard view', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  })

  it('should render the title', () => {
    cy.contains('h1', 'Turing Cafe Reservations')
  })

  it('should render existing reservations', () => {
    cy.get('[data-cy="1"]').should('be.visible')
    cy.get('[data-cy="2"]').should('be.visible')
    cy.get('[data-cy="3"]').should('be.visible')
    cy.get('[data-cy="4"]').should('be.visible')
    cy.get('[data-cy="5"]').should('be.visible')
    cy.get('[data-cy="6"]').should('be.visible')
    cy.get('[data-cy="7"]').should('be.visible')
    cy.get('[data-cy="8"]').should('be.visible')
    cy.get('[data-cy="9"]').should('be.visible')
  })

  it('card should contain reservation information', () => {
    cy.get('[data-cy="1"]').contains('h1', 'Christie')
    cy.get('[data-cy="1"]').contains('p', '12/29')
    cy.get('[data-cy="1"]').contains('p', '7:00')
    cy.get('[data-cy="guests-1"]').should('be.visible')
  });

  it('user can make a reservation', () => {
    cy.get('[data-cy="name-input"]').type('Natalie')
    cy.get('[data-cy="date-input"]').type('03/05')
    cy.get('[data-cy="time-input"]').type('7:00')
    cy.get('[data-cy="guests-input"]').type('2')
    cy.get('[data-cy="submit-reservation"]').click()
    cy.contains('h1', 'Natalie')
  })

})