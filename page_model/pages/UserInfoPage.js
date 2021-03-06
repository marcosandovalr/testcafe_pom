import { Selector, t } from 'testcafe'

class UserInfoPage{
    constructor(){
        this.pageTitle = Selector('.subheader').withExactText('Checkout: Your Information')
        this.continueButton = Selector('.btn_primary.cart_button')
        this.errorMessage =  Selector('h3[data-test="error"]')
        this.firstNameField = Selector('#first-name')
        this.lastNameField = Selector('#last-name')
        this.zipCodeField = Selector('#postal-code')
    }

    async submitUserForm(firstName, lastName, zip){
        await t
            .typeText(this.firstNameField, firstName, {paste: true})
            .typeText(this.lastNameField, lastName, {paste: true}) 
            .typeText(this.zipCodeField, zip, {paste: true}) 
            .click(this.continueButton)
    }
}

export default new UserInfoPage()
