import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Login feature testing')
    .page `https://www.saucedemo.com/`
    .beforeEach(async t => {
        await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    })

test('3. Logout from product\'s page', async t => { 
    await ProductPage.logout()
    await t.expect(LoginPage.loginButton.exists).ok()
})
