describe('milo.works', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', 'Milo Zheng')
	});

	it('navigates to /about', () => {
		cy.get('nav a').contains('contact').click();
		cy.url().should('include', '/contact');
	});

	it('navigates to /projects', () => {
		cy.get('nav a').contains('projects').click();
		cy.url().should('include', '/projects');
	});
});