var CartPage = function() {
    var productTitle = element.all(by.cssContainingText('.product-title', 'Walking trousers')).get(0)
    var totalPrice = element(by.css('.totalprice.padding-left.right.font-red'))
    var voucherInput = element(by.name('voucherNr'))
    var redeemButton = element(by.xpath('//*[@id="basket"]/div[3]/div/div[1]/div/form/ul/li[2]/button'))
    var errorMessage = element(by.xpath('//*[@id="error-modal"]/div/p[2]'))
    var closeErrorButton = element(by.css('.close.close-reveal-modal'))
    var goToCheckoutButton = element.all(by.css('button[type=submit]')).get(1)

    this.getProductTitle = () => {
        return productTitle.getText()
    }

    //remove the euro sign and replace the ',' with '.' in the number format
    this.getTotalPrice = async () => {
        browser.wait(protractor.ExpectedConditions.presenceOf(totalPrice), 5000)
        var price
        await totalPrice.getText().then((temp) => {
            price = temp
        })
        price = price.slice(2)
        price = price.replace(",", ".")
        return price
    }

    this.setVoucher = async () => {
        await voucherInput.sendKeys(browser.params.cart.voucher)
    }

    this.redeemVoucher = async () => {
        await redeemButton.click()
    }

    this.getErrorMessage = () => {
        browser.wait(protractor.ExpectedConditions.textToBePresentInElement(
            errorMessage, 'Reason: This voucher is not valid!'), 5000)
        return errorMessage.getText()
    }

    this.closeErrorMessage = async () => {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(closeErrorButton))
        await closeErrorButton.click()
    }

    this.goToCheckout = async () => {
        browser.sleep(1000)
        await goToCheckoutButton.click()
    }
}
module.exports = new CartPage()