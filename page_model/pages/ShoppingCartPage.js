import { Selector, t } from 'testcafe'

class ShoppingCartPage{
    constructor(){
        this.pageTitle = Selector('.subheader')
        this.backpackLink = Selector('#item_4_title_link')
        this.tshirtLink = Selector('#item_1_title_link')
    }

    // async logout(){
    //     await t
    //         .click(this.menuButton)
    //         .click(this.logoutLink)
    // }
}

export default new ShoppingCartPage()
