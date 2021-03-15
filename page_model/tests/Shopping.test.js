import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import ShoppingCartPage from '../pages/ShoppingCartPage'
import UserInfoPage from '../pages/UserInfoPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Shopping feature testing')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    })
    
test('4. Navigate to the shopping cart', async t => { 
    await t.click(ProductPage.shoppingCartLink)
    await t.expect(ShoppingCartPage.pageTitle.exists).ok()
})

test('5. Add a single item to the shopping cart', async t => { 
    await t
        .click(ProductPage.addBackpackButton)
        .click(ProductPage.shoppingCartLink)
    await t.expect(ShoppingCartPage.backpackLink.exists).ok()
})

test('6. Add multiple items to the shopping cart', async t => { 
    await ProductPage.addMultipleItems()
    await t
        .expect(ShoppingCartPage.backpackLink.exists).ok()
        .expect(ShoppingCartPage.tshirtLink.exists).ok()
})

test('7. Continue with missing mail information', async t => { 
    await ProductPage.addMultipleItems()
    await t
        .click(ShoppingCartPage.checkoutButton)
        .click(UserInfoPage.continueButton)
    await t
        .expect(UserInfoPage.errorMessage.exists).ok()
        .expect(UserInfoPage.errorMessage.innerText).contains('Error')
})
