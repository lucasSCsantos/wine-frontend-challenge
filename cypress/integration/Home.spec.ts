import priceFilter from '../../src/data/price-filter';
import { base, base2, baseFiltered, baseSearch } from '../../src/__mocks__/base';

const checkFilter = () => {
  priceFilter.forEach(({ value, text, id}) => {
    cy.contains(text);
    cy.get(`input[value*="${value}"]`).click();
    cy.url().should('include', `/filter=${value}`)
  })
}

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
  it('should navigate to the home page', () => {
    // Observa se ao abrir o site é encaminhado para a pagina 1
    cy.visit('http://localhost:3000/');
    cy.url().should('include','/1' );
    checkProducts(base);

    // Observa se redireciona para a pagina 2
    cy.get('a[aria-label*="Page 2"]').click();
    cy.url().should('equal', 'http://localhost:3000/2');
    checkProducts(base2);


  });
  it('should filter products on home page', () => {

    checkFilter();
    // Clica em um filtro
    cy.get('input[value*="100-200"]').click();

    // A nova url deve incluir o filter
    cy.url().should('include', '/filter=100-200');

    checkProducts(baseFiltered)
  });
  it('should search products on home page', () => {
    const query = 'bacalhoa';
    // Clica em um filtro
    cy.get('button[data-testid*="search-button"]').click();

    cy.get('input[placeholder*="Pesquisar"]').type(query).type('{enter}');

    cy.url().should('include', `/query=${query}`);

    checkProducts(baseSearch);
  });
});
