import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'

fixture('Login feature testing')
    .page `https://www.saucedemo.com/`
    // .beforeEach(async t => {
    //     await t.click(WelcomePage.loginButton)
    // })

test('Login with a valid user', async t => {
    await t
        .typeText(LoginPage.usernameField, 'standard_user')
        .typeText(LoginPage.passwordField, 'secret_sauce')
        .click(LoginPage.loginButton)

    await t.expect(ProductPage.pageTitle.exists).ok()
})
