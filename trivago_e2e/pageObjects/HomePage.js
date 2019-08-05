var HomePage = function() {
    var searchButton = element(by.xpath('//*[@id="f.search"]/input[4]'))
    var searchBox = element(by.name('searchparam'))
    var purchaseItem = element.all(by.css('.img_container')).get(2)
    
    this.setSearchCriteria = async () => {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(searchButton), 5000)
        await searchButton.click()
        await searchBox.sendKeys(browser.params.homepage.searchItem)
    }

    this.openItemPage = async () => {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(purchaseItem), 5000)
        await purchaseItem.click()
    }
}
module.exports = new HomePage()