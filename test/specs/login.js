const assert = require('assert')

describe('Log in to The Data Refinery', () => {
    it('Should enable user to login with correct credentials', () => {
        
        browser.url('https://thedatarefinery.co.uk')
        browser.maximizeWindow()
        const page = browser.$('data-refinery').shadow$('toolbar-menu')
        const login = page.shadow$('paper-button[class=secondary]')
        login.click()
        browser.waitUntil(() => browser.getUrl() === 'https://thedatarefinery.co.uk/login');
        assert.equal(browser.getUrl(), 'https://thedatarefinery.co.uk/login')
        const loginPage = browser.$('data-refinery').shadow$('login-page');
        const email = loginPage.shadow$('input[name="email"]')
        email.addValue('admin@thedatarefinery.co.uk');
        const password = loginPage.shadow$('input[name="password"]')
        password.addValue('m@8ckdC6h');
        const submit = loginPage.shadow$('form-button')
        submit.click();
        browser.waitUntil(() => browser.getUrl() === 'https://thedatarefinery.co.uk/dashboard');
        assert.equal(browser.getUrl(), 'https://thedatarefinery.co.uk/dashboard')

        browser.closeWindow()
    })
})