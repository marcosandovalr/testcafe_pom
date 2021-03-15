import { Selector, t } from 'testcafe'

class OverviewPage{
    constructor(){
        this.pageTitle = Selector('.subheader').withExactText('Checkout: Overview')
        this.backpackLink = Selector('#item_4_title_link')
        this.tshirtLink = Selector('#item_1_title_link')
        this.finishButton = Selector('.btn_action.cart_button')
    }
}

export default new OverviewPage()
