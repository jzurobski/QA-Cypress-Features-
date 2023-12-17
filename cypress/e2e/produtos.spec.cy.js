/// <reference types="cypress" />

var valores_campos = 7

describe('Funcionalidade Página de Produtos', () => {

beforeEach(() => {
    cy.visit('produtos/')
});

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first() Pega o primeiro, last pega o ultimo
            //.last()
            //.eq(3)
            .contains('Abominable Hoodie')
            .click()
        
    });

    it('Deve adicionar um produto ao carrinho', () => {
        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie')
            .click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(valores_campos)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', valores_campos)
        cy.get('.woocommerce-message').should('contain', valores_campos + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')

        
    });
    it.only('Deve adicionar produtos ao carrinho usando Comando Customizado', () => {
        cy.addProdutos('Arcadio Gym Short','36', 'Blue', 3)
    });

    it.only('Deve adicionar produtos ao carrinho usando Comando Customizado 2', () => {
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt','XL', 'Purple', 2)
    });
});

