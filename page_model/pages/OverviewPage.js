import { Selector, t } from 'testcafe'

class OverviewPage{
    constructor(){
        this.pageTitle = Selector('.subheader').withExactText('Checkout: Overview')
        this.backpackLink = Selector('#item_4_title_link')
        this.tshirtLink = Selector('#item_1_title_link')
    }
}

export default new OverviewPage()