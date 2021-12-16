import priceFilter from '../../src/data/price-filter';
import { base, base2, baseFiltered, baseSearch, item } from '../../src/__mocks__/base';


const checkProducts = (mock) => {
  // Observa se a quantidade de itens total está correta
  cy.get('[data-testid="products-count"]')
  .contains(mock.totalItems); 
  // Observa se existem a quantidade de items corretos e com as informações corretas
  mock.items.forEach(({ id, image, name }) => {
    cy.get(`[data-testid="${id}-product-card"]`);
    cy.get(`[data-testid="${id}-product-image"]`)
      .should('have.attr', 'src')
      .should('include', image);
    cy.get(`[data-testid="${id}-product-name"]`)
    .contains(name);
  })
}

describe('Home page navigation', () => {
  beforeEach(() => {
    cy.viewport(1920, 939)
  })
  it('should navigate to the product page', () => {
    // Observa se ao abrir o site é encaminhado para a pagina 1
    cy.visit('http://localhost:3000/');
    cy.url().should('include','/1' );
    
		cy.get('[data-testid*="0-product-card"]').click();

    cy.url().should('include',`/vinhos/${encodeURIComponent(item.name)}/id=${item.id}` );

  });
  it('should include the product details', () => {
    cy.get('[data-testid*="page-info"]')
		.contains(item.name);

    cy.get('[data-testid*="page-info"]')
		.contains(item.country)

		cy.get('[data-testid*="page-info"]')
		.contains(item.sommelierComment)
  });
  it('should add cart item from products page', () => {
		cy.get('[data-testid*="add-prodcut-from-details"]').click();
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
	it('should add cart several items from products page', () => {
		cy.get('[data-testid*="add-on-count"]').click();
		cy.get('[data-testid*="add-on-count"]').click();

		cy.get('[data-testid*="add-prodcut-from-details"]').click();

		cy.get('[data-testid*="cart-count"]')
		.contains('3');
		cy.get('[data-testid*="cart-button"]').click();
		cy.get('[data-testid*="0-cart-product"]')
		.contains(item.name);
		cy.get('[data-testid*="0-cart-product"]')
		.contains((item.priceNonMember * 3).toFixed(2));
		
		cy.get('[data-testid*="cart-total"]')
		.contains((item.priceNonMember * 3).toFixed(2));

		cy.get('[data-testid*="back-button"]').click();
  });
});
