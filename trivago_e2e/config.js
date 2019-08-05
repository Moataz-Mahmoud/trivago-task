exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub', 
    specs: ['./specs/purchaseTest.js'],
    directConnect: true,
    params: {
        homepage: {
            searchItem: 'LUNDHAGS'
        },
        item: {
            itemWeight: '620 g',
            returnPolicy: '30 days returns policy'
        },
        cart: {
            voucher: 'NotAvailable',
            redeemVoucherErrorMessage: 'Reason: This voucher is not valid!'
        }
    }
};