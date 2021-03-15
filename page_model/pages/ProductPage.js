import { Selector, t } from 'testcafe'

class ProductPage{
    constructor(){
        this.pageTitle = Selector('.product_label')
        this.menuButton = Selector('#react-burger-menu-btn')
        this.logoutLink = Selector('#logout_sidebar_link')
        this.shoppingCartLink = Selector('.shopping_cart_link.fa-layers.fa-fw')
    }

    async logout(){
        await t
            .click(this.menuButton)
            .click(this.logoutLink)
    }
}

export default new ProductPage()
