import { Selector, t } from 'testcafe'

class ConfirmationPage{
    constructor(){
        this.pageTitle = Selector('.subheader').withExactText('Finish')
    }
}

export default new ConfirmationPage()
