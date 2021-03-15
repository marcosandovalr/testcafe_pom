import { Selector, t } from 'testcafe'

class ShoppingCartPage{
    constructor(){
        this.pageTitle = Selector('.subheader').withExactText('Your Cart')
        this.backpackLink = Selector('#item_4_title_link')
        this.tshirtLink = Selector('#item_1_title_link')
        this.checkoutButton= Selector('.btn_action.checkout_button')
    }
}

export default new ShoppingCartPage()
