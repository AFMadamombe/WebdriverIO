const assert = require('assert')

describe('Sign up to The Data Refinery', () => {
    it('Should enable user to sign up with correct credentials', () => {
        //login tot the Data Refinery
        browser.url('https://thedatarefinery.co.uk')
        browser.maximizeWindow()

        //Locate the shadow root of the element
        const page = browser.$('data-refinery').shadow$('toolbar-menu')

        //Locate the element 
        const signUp = page.shadow$('paper-button[class=submit]')

        //click on the element button 
        signUp.click()
        
        //Select the Unlimited records, 1 User from the drop down
        const packageElement = browser.$('data-refinery').shadow$('register-page').shadow$('packages-element').shadow$('package-element')
        const dropdown = packageElement.shadow$('select')
        dropdownValue = dropdown.selectByIndex(0)
        //dropdown.selectByAttribute('value', '1')
        
        //Click on the Join now button 
        const formButton = packageElement.shadow$("form-button")
        formButton.click()
       
        //Enter sign up
        const registerTextBox = browser.$("data-refinery").shadow$("register-page").shadow$("register-form")

        const firstName = registerTextBox.shadow$("input-element:nth-child(1)").shadow$('input[id=first_name]')
        const lastName = registerTextBox.shadow$("input-element:nth-child(2)").shadow$('input[id=last_name]')
        const companyName = registerTextBox.shadow$("input-element:nth-child(3)").shadow$('input[id=company_name]')
        const email = registerTextBox.shadow$("input-element:nth-child(4)").shadow$('input[id=email]')

        firstName.addValue('Alan')
        lastName.addValue('Watts')
        companyName.addValue('Elf Chatter')
        email.addValue('alanwatts1221341@gmail.com')
        
        //Click submit button
        const submitButton = registerTextBox.shadow$('form-button[id=btn')
        //submitButton.click()
                      
        browser.closeWindow()
    })
})