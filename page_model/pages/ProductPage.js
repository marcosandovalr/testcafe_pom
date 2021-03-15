import { Selector, t } from 'testcafe'

class ProductPage{
    constructor(){
        this.pageTitle = Selector('.product_label')
    }
}

export default new ProductPage()
