import { Selector, t } from 'testcafe'

class ShoppingCartPage{
    constructor(){
        this.pageTitle = Selector('.subheader')
    }

    // async logout(){
    //     await t
    //         .click(this.menuButton)
    //         .click(this.logoutLink)
    // }
}

export default new ShoppingCartPage()