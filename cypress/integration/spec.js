/// <reference types="Cypress" />
// https://docs.cypress.io/guides/tooling/intelligent-code-completion.html#Set-up-in-your-Dev-Environment
// https://glebbahmutov.com/blog/testing-svelte-store/
// https://github.com/sveltejs/sapper-template/issues/1

describe('Sapper template app', () => {
	beforeEach(() => {
		cy.visit('/sapper-v3')
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', 'Great success!')
	});

	it('navigates to /sapper-v3/about', () => {
		cy.get('nav a').contains('about').click();
		cy.url().should('include', '/sapper-v3/about');
	});

	it('navigates to /sapper-v3/what-is-sapper', () => {
		cy.get('main ul li a').contains('What is Sapper?').click();
		cy.contains('h1', 'What is Sapper?');
		cy.url().should('include', '/sapper-v3/what-is-sapper');
	});
});
