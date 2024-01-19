/// <reference types="cypress" />

import EnderecoPage from '../support/page.objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
        
    });
    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Joao', 'Carlos', 'Atlassian', 'Australia', 'Lalalala', '333', 'Nova zelandia', 'Queensland', '1111111', '43112345','kakaka@gmail.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });
});