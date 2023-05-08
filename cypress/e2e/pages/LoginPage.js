

class Login {

    go() {
        cy.visit('/')
    }

    loginInvalido(data) {
        cy.get('#username').type(data.email)
        cy.get('#password').type(data.password)
        cy.get('#kc-login').click()

        const expectedText = 'Usuário ou senha inválidos'
        
        cy.get('span[class="pf-c-alert__title kc-feedback-text"]')
            .should('be.visible', expectedText)
    }

    recuperacaoSenha(data) {
        cy.get('div[id="kc-form-reset-psw"]').click()
        cy.get('#username').type(data.email)
        cy.get('#kc-form-buttons').click()

        const expectedText = 'Em breve, você receberá um email com mais instruções'

        cy.get('span[class="pf-c-alert__title kc-feedback-text"]')
            .should('be.visible', expectedText)
    }
}
export default new Login;