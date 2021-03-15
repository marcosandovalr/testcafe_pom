import { Selector, t } from 'testcafe'

class LoginPage{
    constructor(){
        this.userField = Selector('#user-name')
        this.passField = Selector('#password')
        this.loginButton = Selector('#login-button')
        this.errorMessage =  Selector('#login_button_container h3')
    }

    async submitLoginForm(user, pass){
        await t
            .typeText(this.userField, user, {paste: true})
            .typeText(this.passField, pass, {paste: true}) 
            .click(this.loginButton)
    }
}

export default new LoginPage()
