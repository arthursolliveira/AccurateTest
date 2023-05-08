import create from '../pages/LoginPage'
import Login from '../factories/Login'

describe('Tela de login', () =>{
    
    it('Login inválido', () => {
        
        var data = Login.login()

        create.go()
        create.loginInvalido(data)
    });

    it('Recuperação de senha', () =>{

        var data = Login.login()

        create.go()
        create.recuperacaoSenha(data)
    })
});