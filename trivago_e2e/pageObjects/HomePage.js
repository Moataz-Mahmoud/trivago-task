var HomePage = function() {
    var searchButton = element(by.id('f.search'))
    var searchBox = element(by.name('searchparam'))
    var purchaseItem = element.all(by.css('.img_container')).get(2)
    
    this.setSearchCriteria = async () => {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchButton), 5000)
        await searchButton.click()
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchBox), 5000)
        await searchBox.sendKeys(browser.params.homepage.searchItem)
    }

    this.openItemPage = async () => {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(purchaseItem), 5000)
        await purchaseItem.click()
    }
}
module.exports = new HomePage()