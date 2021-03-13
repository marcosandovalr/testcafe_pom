import { Selector, t } from 'testcafe'

class LoginPage{
    constructor(){
        this.usernameField = Selector('#user-name')
        this.passwordField = Selector('#password')
        this.loginButton = Selector('#login-button')
    }
}

export default new LoginPage()
