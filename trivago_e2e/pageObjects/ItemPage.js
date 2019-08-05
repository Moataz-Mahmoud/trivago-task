var ItemPage = function() {
    var itemColor = element(by.xpath('//*[@id="js-varlist-color"]/li[5]/a'))
    var itemSize = element(by.xpath('//*[@id="js-varlist-size"]/li[1]/a'))
    var itemWeight = element(by.xpath('//*[@id="datapool-description"]/div/dl/dd[11]'))
    var returnPolicy = element(by.xpath('//*[@id="details"]/div[1]/div/div[3]/div[3]/div[1]/ul/li[3]'))
    var reviews = element(by.xpath('//*[@id="reviews-overview"]/div[1]/div/div[2]/div[1]/div[1]/div/div[2]/div[3]/span'))
    var addToCartButton = element(by.xpath('//*[@id="tobasketform"]/div[3]/div[4]/button'))
    var backToProductButton = element(by.xpath('//*[@id="popup"]/div/form/div/button[2]'))
    var cookieCloseButton = element(by.xpath('//*[@id="cookiebanner"]/div/div/a'))
    var goToCartButton = element(by.xpath('//*[@id="popup"]/div/form/div/button[1]'))
    var productTitle = element(by.xpath('//*[@id="details"]/div[1]/div/div[1]/div/h1/span[2]'))
    var productPrice = element(by.xpath('//*[@id="tobasketform"]/div[1]/span[3]/span/span[3]/span'))

    this.selectRedLundhags = () => {
        itemColor.click()
    }

    this.selectShortItem = () => {
        itemSize.click()
    }

    this.getItemWeight = () => {
        return itemWeight.getText()
    }

    this.getReturnPolicy = () => {
        return returnPolicy.getText()
    }

    this.getReviews = () => {
        return reviews.getText()
    }

    this.closeCookie = async () => {
        await cookieCloseButton.click()
    }

    this.addToCart = async () => {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(addToCartButton), 5000)
        await addToCartButton.click()
    }

    this.backToProduct = async () => {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(backToProductButton), 5000)
        await backToProductButton.click()
    }

    this.goToCart = async () => {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(goToCartButton), 5000)
        await goToCartButton.click()
    }

    this.getProductTitle = () => {
        return productTitle.getText()
    }

    this.getProductPrice = async () => {
        return await productPrice.getText()
    }
}
module.exports = new ItemPage()