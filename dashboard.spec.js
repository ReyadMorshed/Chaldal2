const { expect } = require('@wdio/globals')
const LoginPage = require('../pageobjects/login.page')

describe('My application Cart Test', () => {
    it('should search add and remove from cart', async () => {
        await driver.pause(15000);
        await LoginPage.clickSearchBtn();
        await LoginPage.searchProduct("toothbrush");
        await LoginPage.addtoCartFirstItem();
        await LoginPage.addtoCartSecondItem();
        await LoginPage.addtoCartThiredItem();
        await driver.pause(1000);
        await LoginPage.clickCartBtn();
        await LoginPage.removeCart();
        await LoginPage.removeCart();
        await LoginPage.removeCart();
        expect("Nothing to see here").toBeDisplayed();
    })
})

