describe('Teste de Cadastro de Usuário', () => {
    beforeEach(() => {
        cy.visit('caminho/para/seu/cadastro.html');
    });

    it('Deve mostrar mensagem de erro para campos vazios', () => {
        cy.get('button').click();
        cy.get('#mensagem').should('contain', 'Todos os campos são obrigatórios.');
    });

    it('Deve mostrar mensagem de erro para senhas diferentes', () => {
        cy.get('#nome').type('Usuário Teste');
        cy.get('#email').type('usuario@test.com');
        cy.get('#senha').type('senha123');
        cy.get('#confirmarSenha').type('senha456');
        cy.get('button').click();
        cy.get('#mensagem').should('contain', 'As senhas não correspondem.');
    });

    it('Deve realizar cadastro com sucesso', () => {
        cy.get('#nome').type('Usuário Teste');
        cy.get('#email').type('usuario@test.com');
        cy.get('#senha').type('senha123');
        cy.get('#confirmarSenha').type('senha123');
        cy.get('button').click();
        cy.get('#mensagem').should('contain', 'Cadastro realizado com sucesso!');
    });
});
