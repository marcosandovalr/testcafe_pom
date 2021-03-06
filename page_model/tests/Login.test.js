import LoginPage from '../pages/LoginPage'
import ProductPage from '../pages/ProductPage'
import { CREDENTIALS } from '../data/Constants'

fixture('Login feature testing')
    .page `https://www.saucedemo.com/`

test('1. Login with a valid user', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t.expect(ProductPage.pageTitle.exists).ok()
})

test('2. Login with an invalid user', async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
    await t
        .expect(LoginPage.errorMessage.exists).ok()
        .expect(LoginPage.errorMessage.innerText).eql('Epic sadface: Username and password do not match any user in this service')
})
