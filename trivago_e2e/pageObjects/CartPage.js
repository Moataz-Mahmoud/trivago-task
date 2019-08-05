var CartPage = function() {
    var productTitle = element(by.xpath('//*[@id="basket"]/form/div[3]/div/div[2]/div/a/span[2]'))
    var totalPrice = element(by.xpath('//*[@id="basket"]/form/div[3]/div/div[5]/div/div/span[1]'))
    var voucherInput = element(by.name('voucherNr'))
    var redeemButton = element(by.xpath('//*[@id="basket"]/div[3]/div/div[1]/div/form/ul/li[2]/button'))
    var errorMessage = element(by.xpath('//*[@id="error-modal"]/div/p[2]'))
    var closeErrorButton = element(by.css('.close.close-reveal-modal'))
    var goToCheckoutButton = element(by.xpath('//*[@id="basket"]/div[4]/div/form/button'))

    this.getProductTitle = () => {
        return productTitle.getText()
    }

    //remove the euro sign and replace the ',' with '.' in the number format
    this.getTotalPrice = async () => {
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
        browser.wait(protractor.ExpectedConditions.presenceOf(element(by.id('error-modal'))), 5000)
        return errorMessage.getText()
    }

    this.closeErrorMessage = async () => {
        await closeErrorButton.click()
    }

    this.goToCheckout = async () => {
        await goToCheckoutButton.click()
    }
}
module.exports = new CartPage()