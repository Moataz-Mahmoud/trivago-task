var homePage = require('../pageObjects/HomePage')
var itemPage = require('../pageObjects/ItemPage')
var cartPage = require('../pageObjects/CartPage')

describe('here are the purchase test cases: ', ()=> {
    //Change the defaul timeout from 10 seconds to 2 minutes.
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

    it('add to chart', async () => {
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        await browser.get('https://www.bergfreunde.eu/')
        
        //search for a product and open its page
        await homePage.setSearchCriteria()
        await homePage.openItemPage()
        itemPage.selectRedLundhags()
        itemPage.selectShortItem()

        //check the item wait, return policy, and the # of reviews
        expect(await itemPage.getItemWeight()).toEqual(browser.params.item.itemWeight)
        expect(await itemPage.getReturnPolicy()).toEqual(browser.params.item.returnPolicy)
        expect(await itemPage.getReviews()).not.toEqual('0')
        var productTitle = itemPage.getProductTitle()
        var productPrice
        var totalPrice
        productPrice = itemPage.getProductPrice().then((price) => {
            totalPrice = price
        })

        //close cookie, then add the item to cart twice, each one with quantity one
        await itemPage.closeCookie()
        await itemPage.addToCart()
        await itemPage.backToProduct()
        await itemPage.addToCart()
        await itemPage.goToCart()

        //make sure that the product title and price are as expected
        expect(cartPage.getProductTitle()).toEqual(productTitle)
        expect(await cartPage.getTotalPrice()).toEqual((totalPrice * 2).toString())
        
        //make sure that the sent voucher isn't working
        await cartPage.setVoucher()
        await cartPage.redeemVoucher()
        expect(await cartPage.getErrorMessage()).toEqual(browser.params.cart.redeemVoucherErrorMessage)
        await cartPage.closeErrorMessage()

        //go to checkout page and expect ask for login
        await cartPage.goToCheckout()
        expect(browser.getCurrentUrl()).toEqual('https://www.bergfreunde.eu/customer/');
    })
})