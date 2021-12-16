describe('Navigation', () => {
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
		cy.reload()
		cy.get('[data-testid*="cart-count"]')
		.contains('1')
  
  });
  it('should filter products on home page', () => {
		cy.get('[data-testid*="cart-button"]').click();
		cy.get('[data-testid*="shopping-cart"]');

  });
  it('should search products on home page', () => {
  
  });
});
