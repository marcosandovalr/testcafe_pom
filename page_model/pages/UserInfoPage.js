import { Selector, t } from 'testcafe'

class UserInfoPage{
    constructor(){
        this.pageTitle = Selector('.subheader').withExactText('Checkout: Your Information')
        this.continueButton = Selector('.btn_primary.cart_button')
        this.errorMessage =  Selector('h3[data-test="error"]')
    }
}

export default new UserInfoPage()
