import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Login feature testing')
    .page `https://www.saucedemo.com/`
    // .beforeEach(async t => {
    //     await t.click(WelcomePage.loginButton)
    // })

test('1. Login with a valid user', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(ProductPage.pageTitle.exists).ok()
})
