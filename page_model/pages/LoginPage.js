import { Selector, t } from 'testcafe'

class LoginPage{
    constructor(){
        this.userField = Selector('#user-name')
        this.passField = Selector('#password')
        this.loginButton = Selector('#login-button')
    }

    async submitLoginForm(user, pass){
        await t
            .typeText(this.userField, user, {paste: true})
            .typeText(this.passField, pass, {paste: true}) 
            .click(this.loginButton)
    }
}

export default new LoginPage()
