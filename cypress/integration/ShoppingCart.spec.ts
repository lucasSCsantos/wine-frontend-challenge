import { base, item } from "../../src/__mocks__/base";

const addProducts = () => {
	let price = 0;
	base.items.forEach(({id, priceNonMember, name}, index) => {
		price += priceNonMember;
		cy.get(`[data-testid*="${id}-product-button"]`).click();
		cy.reload()
		cy.get('[data-testid*="cart-count"]')
		.contains(index + 1);
		cy.get('[data-testid*="cart-button"]').click();
		cy.get(`[data-testid*="${id}-cart-product"]`)
		.contains(name);
		cy.get(`[data-testid*="${id}-cart-product"]`)
		.contains(priceNonMember);
		
		cy.get('[data-testid*="cart-total"]')
		.contains(`${price.toFixed(2)}`);

		cy.get('[data-testid*="back-button"]').click();
	})
}

const removeProducts = () => {
	let price = 1837.28;
	base.items.forEach(({id, priceNonMember, name}, index) => {
		price -= priceNonMember;
		cy.get('[data-testid*="cart-button"]').click();
		cy.get(`button[data-testid*="${id}-remove-one"]`).click();

		cy.get('[data-testid*="cart-button"]').click();
		cy.get(`[data-testid*="${id}-cart-product"]`)
		.should('not.exist');
		
		cy.get('[data-testid*="cart-total"]')
		.contains(`${+price.toFixed(2)}`);

		cy.get('[data-testid*="back-button"]').click();
	})
}

describe('Shopping cart navigation', () => {
  beforeEach(() => {
    cy.viewport(1920, 939)
  })
	it('should exist empty shopping cart', () => {
		cy.visit('http://localhost:3000/');
		cy.get('[data-testid*="cart-button"]').click();
		cy.get('[data-testid*="shopping-cart"]').contains('Você ainda não adicionou items ao carrinho')
		cy.get('[data-testid*="back-button"]').click();


  });
  it('should add one product on cart', () => {
		cy.get('[data-testid*="0-product-button"]').click();
		cy.reload();
		cy.get('[data-testid*="cart-count"]')
		.contains('1');
		cy.get('[data-testid*="cart-button"]').click();
		cy.get('[data-testid*="0-cart-product"]')
		.contains(item.name);
		cy.get('[data-testid*="0-cart-product"]')
		.contains(item.priceNonMember);
		
		cy.get('[data-testid*="cart-total"]')
		.contains(item.priceNonMember);

		cy.get('[data-testid*="back-button"]').click();

  });
	it('should remove one product on cart', () => {
		cy.get('[data-testid*="cart-button"]').click();

		cy.get('[data-testid*="0-remove-one"]').click();
		cy.reload()
		cy.get('[data-testid*="cart-count"]')
		.contains('0');
		cy.get('[data-testid*="cart-button"]').click();
		cy.get('[data-testid*="cart-total"]')
		.contains('0.00');
		cy.get('[data-testid*="back-button"]').click();

  });
	it('should add and remove several products on cart', () => {
		addProducts();
		removeProducts();

  });
});
