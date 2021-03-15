import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Shopping feature testing')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
        await t.click(ProductPage.shoppingCartLink)
    })

test('4. Navigate to the shopping cart', async t => { 
    await t.expect(ShoppingCartPage.pageTitle.exists).ok()
})