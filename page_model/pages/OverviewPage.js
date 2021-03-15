import { Selector, t } from 'testcafe'

class OverviewPage{
    constructor(){
        this.pageTitle = Selector('.subheader').withExactText('Checkout: Overview')
        this.continueButton = Selector('.btn_primary.cart_button')
        this.errorMessage =  Selector('h3[data-test="error"]')
        this.firstNameField = Selector('#first-name')
        this.lastNameField = Selector('#last-name')
        this.zipCodeField = Selector('#postal-code')
    }

    async submittUserForm(firstName, lastName, zip){
        await t
            .typeText(this.firstNameField, firstName, {paste: true})
            .typeText(this.lastNameField, lastName, {paste: true}) 
            .typeText(this.zipCodeField, zip, {paste: true}) 
            .click(this.continueButton)
    }
}

export default new OverviewPage()